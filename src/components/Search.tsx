import React, { useContext } from "react";
import { Button, Form, Select } from "antd";

import spellData from "../data/5e-SRD-Spells.json";
import { SpellbookContext } from "../contexts/SpellbookContext";

const spellOptions = spellData
  .map((spell) => ({ label: spell.name, value: spell.name }))
  .sort();

type FormFields = {
  spellName: string;
};

function Search() {
  const { addSpell } = useContext(SpellbookContext);
  const onFinish = (values: FormFields) => {
    addSpell(values.spellName);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Search for a spell" colon={false} name="spellName">
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
