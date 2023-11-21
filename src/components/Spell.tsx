import { Button, Card, Descriptions } from "antd";

import {
  formatOrdinal,
  isStringArray,
  snakeCaseToSentenceCase,
} from "../helpers";
import type { Spell as SpellType } from "../types";
import { DescriptionsItemType } from "antd/es/descriptions";
import { useContext } from "react";
import { SpellbookContext } from "../contexts/SpellbookContext";

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

const spellLevel = (level: number) => {
  if (level === 0) {
    return "cantrip";
  }
  return formatOrdinal(level) + " level";
};

const DESCRIPTION_STYLE_PROPS = {
  colon: false,
  column: 1,
};

const RemoveButton = ({ spellName }: { spellName: SpellType["name"] }) => {
  const { removeSpell } = useContext(SpellbookContext);
  const handleClick = () => {
    removeSpell(spellName);
  };
  return <Button onClick={handleClick}>remove</Button>;
};

type SpellProps = {
  spell: SpellType;
};

function Spell({ spell }: SpellProps) {
  const descriptionItems: DescriptionsItemType[] = TRAITS.map((traitName) => {
    const trait = spell[traitName];

    if (!trait) {
      return null;
    }

    const item = {
      key: traitName,
      label: snakeCaseToSentenceCase(traitName),
      children: trait,
    };

    if (trait === true) {
      return {
        ...item,
        children: item.label,
      };
    }

    if (isStringArray(trait)) {
      return {
        ...item,
        children: trait.join(", "),
      };
    }

    return item;
  }).filter((item) => item !== null) as DescriptionsItemType[];

  return (
    <Card title={spell.name} extra={<RemoveButton spellName={spell.name} />}>
      <p>
        {spellLevel(spell.level)} {spell.school.name.toLocaleLowerCase()}
      </p>

      <>
        {spell.desc.map((paragraph) => (
          <p key="paragraph">{paragraph}</p>
        ))}
      </>

      <Descriptions {...DESCRIPTION_STYLE_PROPS} items={descriptionItems} />
    </Card>
  );
}

export default Spell;
