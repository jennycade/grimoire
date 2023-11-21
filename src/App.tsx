import React from "react";
import { Typography } from "antd";
import { LocalStorageProvider } from "./contexts/LocalStorageContext";
import { SpellbookProvider } from "./contexts/SpellbookContext";
import Search from "./components/Search";
import List from "./components/List";
import ListSection from "./components/ListSection";

const { Title } = Typography;

function App() {
  return (
    <div className="App" style={{ margin: "0 100px" }}>
      <Title>Spellbook</Title>

      <LocalStorageProvider storeKey="spellbook">
        <SpellbookProvider>
          <Search />
          <ListSection title="Saved Spells" />
        </SpellbookProvider>
      </LocalStorageProvider>
    </div>
  );
}

export default App;
