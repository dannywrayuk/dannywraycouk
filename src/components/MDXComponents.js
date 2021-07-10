import Greeting from "./Greeting";
import { Menu, MenuContent } from "./Menu";
import Logo from "./Logo";
import CornerLogo from "./CornerLogo";
import Padding from "./Padding";
import Footer from "./Footer";
import QuickStart from "./QuickStart";
import * as Heads from "./Heads";
import * as chakra from "@chakra-ui/react";

const EquationBlock = (props) => <div {...props} />;
const EquationInline = (props) => <span {...props} />;

const MDXComponents = {
  ...chakra,
  ...Heads,
  EquationBlock,
  EquationInline,
  Greeting,
  Menu,
  MenuContent,
  Logo,
  CornerLogo,
  Padding,
  Footer,
  QuickStart,
};

export default MDXComponents;
