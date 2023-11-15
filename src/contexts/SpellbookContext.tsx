import { type ReactNode, createContext, useState } from "react";
import spellData from "../data/5e-SRD-Spells.json";
import type { Spell } from "../types";

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
  const [spells, setSpells] = useState<Spell[]>([]);

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
    setSpells((oldSpells) => [...oldSpells, newSpell]);
  };

  return (
    <SpellbookContext.Provider value={{ spells, addSpell }}>
      {children}
    </SpellbookContext.Provider>
  );
};
