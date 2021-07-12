import Greeting from "./Greeting";
import Menu from "./Menu";
import Logo from "./Logo";
import Padding from "./Padding";
import Footer from "./Footer";
import QuickStart from "./QuickStart";
import PostHeading from "./PostHeading";
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
  Logo,
  Padding,
  Footer,
  QuickStart,
  PostHeading,
};

export default MDXComponents;
