// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
const ORDINAL_RULES = new Intl.PluralRules("en-US", { type: "ordinal" });

const ORDINAL_SUFFIXES = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
export const formatOrdinal = (n: number) => {
  const rule = ORDINAL_RULES.select(n);
  const suffix = ORDINAL_SUFFIXES.get(rule);
  return `${n}${suffix}`;
};

export const snakeCaseToSentenceCase = (string: string) => {
  const unsnaked = string.replace("_", " ");
  const capitalized =
    unsnaked.slice(0, 1).toLocaleUpperCase() + unsnaked.slice(1);
  return capitalized;
};
