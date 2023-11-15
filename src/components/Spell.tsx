import { Card, Descriptions } from "antd";

import { formatOrdinal, snakeCaseToSentenceCase } from "../helpers";
import type { Spell as SpellType } from "../types";
import { DescriptionsItemType } from "antd/es/descriptions";

const TRAITS = [
  "casting_time",
  "range",
  "components",
  "duration",
  // "classes[].name",
  "material",
  "ritual",
  "concentration",
  "higher_level",
] as const;

const STYLE_PROPS = {
  colon: false,
  column: 1,
};

type SpellProps = {
  spell: SpellType;
};

function Spell({ spell }: SpellProps) {
  const descriptionItems: DescriptionsItemType[] = TRAITS.map((trait) => ({
    key: trait,
    label: snakeCaseToSentenceCase(trait),
    children: spell[trait],
  }));

  return (
    <Card title={spell.name}>
      <p>
        {formatOrdinal(spell.level)} level{" "}
        {spell.school.name.toLocaleLowerCase()}
      </p>
      <p>{spell.desc}</p>

      <Descriptions {...STYLE_PROPS} items={descriptionItems} />
    </Card>
  );
}

export default Spell;
