import Menu from "./Menu";
import Logo from "./Logo";
import Padding from "./Padding";
import Footer from "./Footer";
import QuickStart from "./QuickStart";
import IndexList from "./IndexList";
import ImageCard from "./ImageCard";
import { Title, SubTitle, Description } from "./Text";
import LinkButton from "./LinkButton";
import TitledSection from "./TitledSection";
import Tags from "./Tags";
import PageTitle from "./PageTitle";

import * as Heads from "./Heads";
import * as chakra from "@chakra-ui/react";

const EquationBlock = (props) => <div {...props} />;
const EquationInline = (props) => <span {...props} />;

const MDXComponents = {
  ...chakra,
  ...Heads,
  EquationBlock,
  EquationInline,
  Menu,
  Logo,
  Padding,
  Footer,
  QuickStart,
  ImageCard,
  Title,
  SubTitle,
  IndexList,
  LinkButton,
  TitledSection,
  Tags,
  PageTitle,
  Description,
};

export default MDXComponents;
