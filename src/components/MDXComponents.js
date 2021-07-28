import Greeting from "./Greeting";
import Menu from "./Menu";
import Logo from "./Logo";
import Padding from "./Padding";
import Footer from "./Footer";
import QuickStart from "./QuickStart";
import IndexList from "./IndexList";
import ImageCard from "./ImageCard";
import Title from "./Text/Title";
import SubTitle from "./Text/SubTitle";
import VBar from "./Text/VBar";
import SeeAllTab from "./SeeAllTab";
import LinkButton from "./LinkButton";

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
  ImageCard,
  Title,
  SubTitle,
  VBar,
  IndexList,
  SeeAllTab,
  LinkButton,
};

export default MDXComponents;
