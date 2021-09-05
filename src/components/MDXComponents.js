import Menu from "./Menu";
import Logo from "./Logo";
import Padding from "./Padding";
import Footer from "./Footer";
import IndexList from "./IndexList";
import ImageCard from "./ImageCard";
import { Title, SubTitle, Description } from "./Text";
import LinkButton from "./LinkButton";
import TitledSection from "./TitledSection";
import Tags from "./Tags";
import PageTitle from "./PageTitle";
import { PostLayout, ContentLayout } from "./Layouts";

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
  ImageCard,
  Title,
  SubTitle,
  IndexList,
  LinkButton,
  TitledSection,
  Tags,
  PageTitle,
  Description,
  PostLayout,
  ContentLayout,
};

export default MDXComponents;
