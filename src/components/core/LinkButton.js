import styled from "@emotion/styled";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "@components/core";
import { useCSSProp } from "@utils/useCSSProp";

const useVariants =
  (styles) =>
  ({ variant }) =>
    styles[variant];

const StyledLink = styled(Link)(
  {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "5px",
    fontSize: "1.25rem",
    fontFamily: "var(--Inter)",
  },
  useVariants({
    primary: {
      backgroundColor: "var(--text)",
      color: "var(--background)",
      borderRadius: "100px",
      padding: "15px 30px",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: "var(--primary)",
        color: "black",
        columnGap: "7px",
      },
    },
    secondary: {
      background: "none",
      color: "var(--text)",
      borderRadius: "100px",
      padding: "15px 30px",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: "#88888822",
        columnGap: "7px",
      },
    },
    icon: {
      color: "var(--text)",
      transition: "0.3s",
      fontSize: "1.5rem",
      "&:hover": {
        color: "var(--primary)",
      },
    },
  }),
  useCSSProp
);

export const LinkButton = ({
  withArrow,
  href,
  variant,
  children,
  className,
  _css,
}) => {
  return (
    <StyledLink href={href} variant={variant} className={className} _css={_css}>
      {children}
      {withArrow && <FiArrowRight />}
    </StyledLink>
  );
};

export const ColoredLinkButton = styled(Link)(
  {
    textDecoration: "none",
    fontFamily: "var(--Sora)",
    borderRadius: "10px",
    padding: "10px 15px",
    margin: "3px",
  },
  ({ color = "#ffca1e" }) => ({ color, backgroundColor: color + "48" })
);
