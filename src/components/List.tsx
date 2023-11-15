import { useContext } from "react";
import { SpellbookContext } from "../contexts/SpellbookContext";

function List() {
  const { spells } = useContext(SpellbookContext);
  return (
    <ul>
      {spells.map((spell) => (
        <li key={spell.name}>{spell.name}</li>
      ))}
    </ul>
  );
}

export default List;
