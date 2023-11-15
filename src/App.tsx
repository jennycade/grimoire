import React from "react";
import { Typography } from "antd";
import { SpellbookProvider } from "./contexts/SpellbookContext";
import Search from "./components/Search";
import List from "./components/List";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title>Spellbook</Title>

      <SpellbookProvider>
        <Search />
        <Title level={2}>Saved Spells</Title>
        <List />
      </SpellbookProvider>
    </div>
  );
}

export default App;
