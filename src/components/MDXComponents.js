import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {
  Heading,
  Text,
  CapsText,
  Flex,
  LinkInternal,
  LinkButton,
  Image,
  Button,
  Icon,
} from "@components/core";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { mq } from "@utils/breakpoints";

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

const CopyButton = styled(Button)({
  position: "absolute",
  right: -15,
  top: -15,
  padding: "8px",
  color: "#c9d1d9",
  borderRadius: "0.5em",
  backgroundColor: "#343941",
  transition: "0.3s",
  ":hover": {
    backgroundColor: "#57606a",
  },
});

const Relative = styled.div({ position: "relative" });

const CodeWithClipboard = (props) => {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);
  return (
    <Relative>
      <CopyButton
        aria-label="Copy to clipboard"
        onClick={() => {
          navigator.clipboard.writeText(contentRef.current.innerText);
          setCopied(true);
        }}
      >
        {copied ? (
          <Icon as={BsCheck} color="lime" />
        ) : (
          <Icon as={AiOutlinePaperClip} />
        )}
      </CopyButton>
      <pre ref={contentRef} {...props} />
    </Relative>
  );
};

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
  img: (props) =>
    props.width ? (
      <Image
        layout="responsive"
        sizes={{ md: "80vw", max: "700px" }}
        {...props}
      />
    ) : (
      <img {...props} />
    ),
  pre: CodeWithClipboard,
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
      borderLeft: "0.25em solid var(--color-bg-muted)",
      padding: "0 1em",
      color: "var(--color-fg-muted)",
      backgroundColor: "var(--color-bg-default)",
      marginBottom: "20px",
    },
    "blockquote p": {
      margin: 0,
    },
    code: {
      padding: "2px 3px",
      borderRadius: "5px",
    },
    hr: {
      borderColor: "var(--color-bg-muted)",
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
      padding: "20px 10px",
      marginBottom: "20px",
      borderRadius: "5px",
      fontSize: "0.9rem",
      lineHeight: "1.5em",
      overflowX: "auto",
      [mq.md]: {
        padding: "20px 30px",
      },
    },
    p: {
      marginBottom: "20px",
    },
    "> p,li": {
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
    "td img[alt~='icon']": {
      width: "32px",
      display: "block",
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
