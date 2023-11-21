import React from "react";
import { Typography } from "antd";
import { LocalStorageProvider } from "./contexts/LocalStorageContext";
import { SpellbookProvider } from "./contexts/SpellbookContext";
import Search from "./components/Search";
import List from "./components/List";

const { Title } = Typography;

function App() {
  return (
    <div className="App" style={{ margin: "0 100px" }}>
      <Title>Spellbook</Title>

      <LocalStorageProvider storeKey="spellbook">
        <SpellbookProvider>
          <Search />
          <Title level={2}>Saved Spells</Title>
          <List />
        </SpellbookProvider>
      </LocalStorageProvider>
    </div>
  );
}

export default App;
