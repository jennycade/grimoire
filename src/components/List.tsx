import React, { useContext } from "react";
import { SpellbookContext } from "../contexts/SpellbookContext";
import Spell from "./Spell";

function List() {
  const { spells } = useContext(SpellbookContext);
  return (
    <>
      {spells.map((spell) => (
        <React.Fragment key={spell.name}>
          <Spell spell={spell} />
        </React.Fragment>
      ))}
    </>
  );
}

export default List;
