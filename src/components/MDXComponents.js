import { Title, SubTitle, Description } from "./Text";
import LinkButton from "./LinkButton";
import TitledSection from "./TitledSection";
import Tags from "./Tags";
import { PostList } from "./PostList";
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
  Title,
  SubTitle,
  LinkButton,
  TitledSection,
  Tags,
  Description,
  BasicLayout,
  HomeLayout,
  PostList,
};

export default MDXComponents;
