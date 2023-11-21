import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import spellData from "../data/5e-SRD-Spells.json";
import type { Spell } from "../types";
import { LocalStorageContext } from "./LocalStorageContext";

type SpellbookContextType = {
  spells: Spell[];
  addSpell: (spellName: Spell["name"]) => void;
};

export const SpellbookContext = createContext<SpellbookContextType>({
  spells: [],
  addSpell: () => null,
});

type SpellbookProviderProps = {
  children: ReactNode;
};

export const SpellbookProvider = ({ children }: SpellbookProviderProps) => {
  const { store, overwriteStore } = useContext(LocalStorageContext);

  const [spells, setSpells] = useState<Spell[]>(
    Array.isArray(store) ? store : []
  );

  useEffect(() => {
    if (Array.isArray(store)) {
      setSpells(store);
    }
  }, [store]);

  const addSpell = (newSpellName: Spell["name"]) => {
    if (spells.some((existingSpell) => existingSpell.name === newSpellName)) {
      throw new Error(`Spell already saved in spellbook: ${newSpellName}`);
    }
    const newSpell = spellData.find(
      (dataSpell) => dataSpell.name === newSpellName
    );
    if (!newSpell) {
      throw new Error(`Spell not found: ${newSpellName}`);
    }

    const newSpells = [...spells, newSpell];
    setSpells(newSpells);
    overwriteStore(newSpells);
  };

  return (
    <SpellbookContext.Provider value={{ spells, addSpell }}>
      {children}
    </SpellbookContext.Provider>
  );
};
