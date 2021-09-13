import Menu from "./Menu";
import Logo from "./Logo";
import Padding from "./Padding";
import Footer from "./Footer";
import { Title, SubTitle, Description } from "./Text";
import LinkButton from "./LinkButton";
import TitledSection from "./TitledSection";
import Tags from "./Tags";
import PageTitle from "./PageTitle";
import { PostLayout, BasicLayout } from "./Layouts";
import { SplitCard, SplitCardText, SplitCardTitle } from "./SplitCard";
import PostList from "./PostList";

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
  Title,
  SubTitle,
  LinkButton,
  TitledSection,
  Tags,
  PageTitle,
  Description,
  PostLayout,
  BasicLayout,
  SplitCard,
  SplitCardText,
  SplitCardTitle,
  PostList,
};

export default MDXComponents;
