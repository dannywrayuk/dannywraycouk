import styled from "@emotion/styled";
import { Link, Button } from "@components/core";
import { IoMenu } from "react-icons/io5";

const Grid = styled.div({
  display: "grid",
  padding: "45px 10px 0",
  alignItems: "center",
  justifyItems: "center",
  gridTemplateColumns: "85px 3fr 85px 1fr 85px 1fr 85px 3fr 85px",
});

const NavLink = styled(Link)({
  fontSize: "0.93rem",
  fontFamily: "var(--Inter)",
  fontWeight: "600",
  textDecoration: "none",
  color: "var(--text)",
  textAlign: "center",
  "&:hover": { color: "red" },
});

const Logo = styled(Link)({
  fontSize: "1.5rem",
  fontFamily: "Montserrat",
  fontWeight: "700",
  textDecoration: "none",
  letterSpacing: "-0.05em",
  color: "var(--text)",
  textAlign: "center",
  "&:hover": { color: "red" },
});

const Menu = styled(Button)({
  margin: "0 auto 0",
});

const MenuIcon = styled(IoMenu)({
  width: "22px",
  height: "22px",
  color: "var(--text)",
});

export const Navigation = () => (
  <Grid>
    <Logo href="/">danny.</Logo>
    <div />
    <NavLink href="/sticker-sheet">Thoughts</NavLink>
    <div />
    <NavLink href="/sticker-sheet">Projects</NavLink>
    <div />
    <NavLink href="/sticker-sheet">About</NavLink>
    <div />
    <Menu onClick={() => alert("hey")}>
      <MenuIcon />
    </Menu>
  </Grid>
);
