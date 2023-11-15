import React from "react";
import { Button, Form, Select } from "antd";

import spellData from "../data/5e-SRD-Spells.json";

const spellOptions = spellData
  .map((spell) => ({ label: spell.name, value: spell.name }))
  .sort();

function Search() {
  return (
    <Form>
      <Form.Item label="Search for a spell" colon={false}>
        <Select
          allowClear
          showSearch
          placeholder="Spell name"
          options={spellOptions}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Add to spellbook
      </Button>
    </Form>
  );
}

export default Search;
