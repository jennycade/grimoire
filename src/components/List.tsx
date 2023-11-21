import React, { useContext } from "react";
import { ConfigProvider } from "antd";

import { SpellbookContext } from "../contexts/SpellbookContext";
import Spell from "./Spell";

type ListProps = {
  columns?: number;
};

function List({ columns = 2 }: ListProps) {
  const { spells } = useContext(SpellbookContext);
  const gridTemplateColumns = `repeat(${columns}, 1fr)`;

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            headerBg: "rgba(0, 0, 0, 0.02)",
          },
        },
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns,
          gap: "1rem",
        }}
      >
        {spells.map((spell) => (
          <React.Fragment key={spell.name}>
            <Spell spell={spell} />
          </React.Fragment>
        ))}
      </div>
    </ConfigProvider>
  );
}

export default List;
