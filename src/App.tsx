import React from "react";
import { Typography } from "antd";
import Search from "./components/Search";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title>Spellbook</Title>

      <Search />
    </div>
  );
}

export default App;
