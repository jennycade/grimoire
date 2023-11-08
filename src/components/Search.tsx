import React from "react";
import { Form, Input } from "antd";

const { Search: AntdSearch } = Input;

function Search() {
  return (
    <Form.Item label="Search for a spell" colon={false}>
      <AntdSearch allowClear placeholder="Spell name" />
    </Form.Item>
  );
}

export default Search;
