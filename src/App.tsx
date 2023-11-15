import React from "react";
import { Typography } from "antd";
import Search from "./components/Search";
import { SpellbookProvider } from "./contexts/SpellbookContext";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title>Spellbook</Title>

      <SpellbookProvider>
        <Search />
      </SpellbookProvider>
    </div>
  );
}

export default App;
