import styled from "@emotion/styled";
import { Link, Button } from "@components/core";
import { IoMenu } from "react-icons/io5";
import { md } from "@utils/breakpoints";

const Grid = styled.div({
  display: "grid",
  padding: "45px 10px 0",
  alignItems: "center",
  justifyItems: "center",
  gridTemplateColumns: "85px 1fr 85px",
});

const NavLink = styled(Link)({
  fontSize: "0.93rem",
  fontFamily: "var(--Inter)",
  fontWeight: "600",
  textDecoration: "none",
  color: "var(--text)",
  textAlign: "center",
  "&:hover": { color: "var(--primary)" },
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
  margin: "0 auto 0",
  gridColumn: 3,
});

const MenuIcon = styled(IoMenu)({
  width: "22px",
  height: "22px",
  color: "var(--text)",
});

const Nav = styled.nav({
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "100%",
  maxWidth: "700px",
  justifyItems: "center",
  display: "none",
  [md]: {
    display: "grid",
  },
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
    <Nav>
      <NavLink href="/sticker-sheet">Thoughts</NavLink>
      <NavLink href="/sticker-sheet">Projects</NavLink>
      <NavLink href="/sticker-sheet">About</NavLink>
    </Nav>
    <Menu onClick={tempToggleDarkMode}>
      <MenuIcon />
    </Menu>
  </Grid>
);