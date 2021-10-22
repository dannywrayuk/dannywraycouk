import Padding from "./Padding";
import Footer from "./Footer";
import { Title, SubTitle, Description } from "./Text";
import LinkButton from "./LinkButton";
import TitledSection from "./TitledSection";
import Tags from "./Tags";
import { BasicLayout, HomeLayout } from "./Layouts";

import * as Heads from "./Heads";
import * as chakra from "@chakra-ui/react";

const EquationBlock = (props) => <div {...props} />;
const EquationInline = (props) => <span {...props} />;

const MDXComponents = {
  ...chakra,
  ...Heads,
  EquationBlock,
  EquationInline,
  Padding,
  Footer,
  Title,
  SubTitle,
  LinkButton,
  TitledSection,
  Tags,
  Description,
  BasicLayout,
  HomeLayout,
};

export default MDXComponents;
