import styled from "@emotion/styled";
import { Link, Button } from "@components/core";
import { IoMenu } from "react-icons/io5";
import { md, sm } from "@utils/breakpoints";

const Grid = styled.div({
  display: "grid",
  padding: "25px 0px 0",
  alignItems: "center",
  justifyItems: "center",
  gridTemplateColumns: "85px 1fr 85px",
  [sm]: {
    padding: "45px 10px 0",
  },
});

const Logo = styled(Link)({
  fontSize: "1.5rem",
  fontFamily: "Montserrat",
  fontWeight: "700",
  textDecoration: "none",
  letterSpacing: "-0.05em",
  color: "var(--text)",
  textAlign: "center",
  "&:hover": { color: "var(--primary)" },
});

const Menu = styled(Button)({
  margin: "0 10px 0 auto",
  gridColumn: 3,
  [sm]: {
    marginLeft: "auto",
  },
});

const MenuIcon = styled(IoMenu)({
  width: "22px",
  height: "22px",
  color: "var(--text)",
});

const tempToggleDarkMode = () => {
  const html = document.documentElement;
  if (html.getAttribute("colorMode") === "light") {
    html.setAttribute("colorMode", "dark");
  } else {
    html.setAttribute("colorMode", "light");
  }
};

export const Navigation = () => (
  <Grid>
    <Logo href="/">danny.</Logo>
    <Menu onClick={tempToggleDarkMode}>
      <MenuIcon />
    </Menu>
  </Grid>
);
