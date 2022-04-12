import { Heading, Text } from "@components/core";

const EquationBlock = (props) => <div {...props} />;
const EquationInline = (props) => <span {...props} />;

export const MdxThemeComponents = {
  Heading,
  EquationBlock,
  EquationInline,
  p: Text,
};
