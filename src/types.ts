import spellData from "./data/5e-SRD-Spells.json";

export type Spell = (typeof spellData)[number];
