import styled from "@emotion/styled";
import { h1, h2, h3, p, ul, ol, li } from "./common";

const EquationBlock = (props) => <div {...props} />;
const EquationInline = (props) => <span {...props} />;

export const MdxComponents = {
  EquationBlock,
  EquationInline,
  h1,
  h2,
  h3,
  p,
  ul,
  ol,
  li,
  code: styled.code({
    backgroundColor: "var(--feintGrey)",
    padding: "2px 3px",
    borderRadius: "5px",
  }),
  pre: styled.pre({
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "var(--feintGrey)",
    borderRadius: "5px",
    fontSize: "0.9rem",
    lineHeight: "1.5em",
  }),
  blockquote: styled.blockquote({
    borderLeft: "0.25em solid var(--feintGrey)",
    padding: "0 1em",
    color: "var(--midGrey)",
  }),
  a: styled.a({
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  }),
  hr: styled.hr({ borderColor: "var(--feintGrey)", borderStyle: "solid" }),
  del: styled.del({ textDecoration: "line-through" }),
};
