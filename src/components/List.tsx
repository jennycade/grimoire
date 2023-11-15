import React, { useContext } from "react";
import { ConfigProvider, Space } from "antd";

import { SpellbookContext } from "../contexts/SpellbookContext";
import Spell from "./Spell";

function List() {
  const { spells } = useContext(SpellbookContext);
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
      <Space direction="vertical" size="large">
        {spells.map((spell) => (
          <React.Fragment key={spell.name}>
            <Spell spell={spell} />
          </React.Fragment>
        ))}
      </Space>
    </ConfigProvider>
  );
}

export default List;
