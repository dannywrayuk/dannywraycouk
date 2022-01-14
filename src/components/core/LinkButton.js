import styled from "@emotion/styled";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "@components/core";

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
    textDecoration: "none",
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
  })
);

export const LinkButton = ({ withArrow, href, variant, children }) => {
  return (
    <StyledLink href={href} variant={variant}>
      {children}
      {withArrow && <FiArrowRight />}
    </StyledLink>
  );
};
