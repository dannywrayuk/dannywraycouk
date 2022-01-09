import styled from "@emotion/styled";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "@components/core";

const applyVariant =
  (styles) =>
  ({ variant }) =>
    styles[variant];

const StyledAnchor = styled(Link)(
  {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    textDecoration: "none",
  },
  applyVariant({
    primary: {
      backgroundColor: "var(--text)",
      color: "var(--background)",
      borderRadius: "100px",
      padding: "15px 30px",
    },
    secondary: {
      background: "none",
      color: "var(--text)",
      borderRadius: "100px",
      padding: "15px 30px",
      border: "2px solid var(--text)",
    },
  })
);

const StyledArrow = styled(FiArrowRight)({
  margin: "auto 0 auto 5px",
  fontSize: "1.25rem",
});
const VerticalAlign = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const LinkButton = ({ withArrow, href, variant, children }) => {
  return (
    <StyledAnchor href={href} variant={variant}>
      <VerticalAlign>{children}</VerticalAlign>
      {withArrow && <StyledArrow />}
    </StyledAnchor>
  );
};
