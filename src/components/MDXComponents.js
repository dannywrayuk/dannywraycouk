import styled from "@emotion/styled";
import {
  Heading,
  Text,
  CapsText,
  Flex,
  LinkInternal,
  LinkButton,
  Image,
} from "@components/core";

const Square = styled.div(
  {
    width: "24px",
    height: "24px",
    border: "1px solid gray",
    borderRadius: "0.5em",
  },
  ({ col }) => ({ backgroundColor: col })
);

const Swatch = ({ col }) => (
  <Flex ai="center" cg="4px">
    <Square col={col} />
    <Text _css={{ fontFamily: "monospace" }}>{col}</Text>
  </Flex>
);

const SideNote = styled.div({
  backgroundColor: "var(--color-bg-subtle)",
  borderLeft: "3px solid var(--color-brand-primary)",
  padding: "20px 20px 0",
});

const ImageWrapper = styled.span({
  display: "block",
  position: "relative",
  width: "100%",
  height: "700px",
});

const As = (Component, addProps, css) => (props) => {
  const Styled = styled(Component)(css);
  return <Styled {...addProps} {...props} />;
};

export const MDXComponents = {
  h1: Heading,
  h2: As(Heading, { as: "h2", size: "lg" }),
  h3: As(Heading, { as: "h3", size: "md" }),
  p: Text,
  a: LinkInternal,
  ul: As(Text, { as: "ul" }),
  ol: As(Text, { as: "ol" }),
  li: As(Text, { as: "li" }),
  table: As(Text, { as: "table" }),
  img: As(Image, { layout: "responsive", sizes: { md: "80vw", max: "700px" } }),
  Swatch,
  Heading,
  Text,
  CapsText,
  SideNote,
  LinkButton,
};

const ParentStyles = styled.div(
  {
    ".contains-task-list": {
      listStyleType: "none",
    },
    ".task-list-item input[type=checkbox]": {
      verticalAlign: "middle",
      margin: "0 0.2em 0.25em -1.2em",
    },
    blockquote: {
      borderLeft: "0.25em solid var(--feintGrey)",
      padding: "0 1em",
      color: "var(--midGrey)",
    },
    code: {
      padding: "2px 3px",
      borderRadius: "5px",
    },
    hr: {
      borderColor: "var(--feintGrey)",
      borderStyle: "solid",
    },
    li: {
      paddingLeft: "1.5em",
      margin: "5px 0",
    },
    ol: {
      listStylePosition: "inside",
      marginBottom: "20px",
    },
    pre: {
      display: "flex",
      flexDirection: "column",
      padding: "20px 30px",
      borderRadius: "5px",
      fontSize: "0.9rem",
      lineHeight: "1.5em",
      overflowX: "auto",
    },
    p: {
      marginBottom: "20px",
    },
    "> p": {
      backgroundColor: "var(--color-bg-default)",
      borderRadius: "1em",
    },
    table: {
      display: "block",
      width: "max-content",
      overflow: "auto",
      borderCollapse: "collapse",
      maxWidth: "100%",
      margin: "20px auto",
    },
    th: {
      padding: "5px 15px",
      backgroundColor: "var(--color-bg-subtle)",
      border: "solid 1px var(--color-border-default)",
    },
    td: {
      padding: "5px 15px",
      border: "solid 1px var(--color-border-default)",
      backgroundColor: "var(--color-bg-default)",
    },
    ul: {
      listStylePosition: "inside",
      listStyleType: "disc",
      marginBottom: "20px",
    },
    "h1,h2,h3,h4": {
      margin: "60px 0 20px",
    },
  },
  ({ data }) => ({
    textAlign: data?.textAlign || undefined,
  })
);

export const withMDXStyles = (Layout) => (props) =>
  <ParentStyles as={Layout} {...props} />;
