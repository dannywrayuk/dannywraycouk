import Greeting from "./Greeting";
import Layout from "./Layout";
import { MenuDraw, MenuDrawContent } from "./MenuDraw";
import * as Heads from "./Heads";
import * as chakra from "@chakra-ui/react";

const EquationBlock = (props) => <div {...props} />;
const EquationInline = (props) => <span {...props} />;

const MDXComponents = {
  ...chakra,
  ...Heads,
  EquationBlock,
  EquationInline,
  Layout,
  Greeting,
  MenuDraw,
  MenuDrawContent,
};

export default MDXComponents;
