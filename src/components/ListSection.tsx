import { Form, Slider, Typography } from "antd";
import { useState } from "react";
import List from "./List";
import { TitleProps } from "antd/es/typography/Title";

const { Title } = Typography;

type ListSectionProps = {
  title: TitleProps["children"];
};

function ListSection({ title }: ListSectionProps) {
  const [gridColumns, setGridColumns] = useState(2);

  return (
    <>
      <Title level={2}>{title}</Title>
      <Form.Item colon={false} label="Columns">
        <Slider
          min={1}
          max={6}
          value={gridColumns}
          onChange={(value) => setGridColumns(value)}
        />
      </Form.Item>
      <List columns={gridColumns} />
    </>
  );
}

export default ListSection;
