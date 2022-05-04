import styled from "@emotion/styled";
import { Heading, SubHeading, SubSubHeading, Text } from "@components/core";

const As = (Component, as, css) => (props) => {
  const Styled = styled(Component)(css);
  return <Styled as={as} {...props} />;
};

export const MDXComponents = {
  h1: As(Heading),
  h2: As(SubHeading),
  h3: As(SubSubHeading),
  p: As(Text),
  ul: As(Text, "ul"),
  ol: As(Text, "ol"),
  li: As(Text, "li"),
  table: As(Text, "table"),
};

export const withMDXStyles = (Layout) =>
  styled(Layout)({
    ".contains-task-list": {
      listStyleType: "none",
    },
    ".task-list-item input[type=checkbox]": {
      verticalAlign: "middle",
      margin: "0 0.2em 0.25em -1.2em",
    },
    a: {
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
    blockquote: {
      borderLeft: "0.25em solid var(--feintGrey)",
      padding: "0 1em",
      color: "var(--midGrey)",
    },
    code: {
      backgroundColor: "#1e1e1e",
      color: "#d1d1d1",
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
    },
    pre: {
      display: "flex",
      flexDirection: "column",
      padding: "20px 30px",
      backgroundColor: "#1e1e1e",
      borderRadius: "5px",
      fontSize: "0.9rem",
      lineHeight: "1.5em",
      overflowX: "auto",
    },
    table: {
      display: "block",
      width: "max-content",
      overflow: "auto",
      borderCollapse: "collapse",
      maxWidth: "100%",
    },
    th: {
      padding: "5px 15px",
      backgroundColor: "var(--feintGrey)",
      border: "solid 1px var(--midGrey)",
    },
    td: {
      padding: "5px 15px",
      border: "solid 1px var(--midGrey)",
    },
    ul: {
      listStylePosition: "inside",
      listStyleType: "disc",
    },
  });
