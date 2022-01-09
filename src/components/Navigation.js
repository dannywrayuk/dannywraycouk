import styled from "@emotion/styled";
import { Link, Button } from "@components/core";
import { IoMenu } from "react-icons/io5";

const Grid = styled.div({
  display: "grid",
  padding: "45px 10px 0",
  gridTemplateColumns: "85px 3fr 85px 1fr 85px 1fr 85px 3fr 85px",
});

const NavItem = styled.div(
  {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: 85,
  },
  ({ gridColumn }) => ({ gridColumn })
);

const NavLink = styled(Link)({
  fontSize: "0.93rem",
  fontFamily: "var(--Inter)",
  fontWeight: "600",
  textDecoration: "none",
  color: "var(--text)",
  textAlign: "center",
  margin: "0 auto 0",
  "&:hover": { color: "red" },
});

const Logo = styled(Link)({
  gridColumn: 1,
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
    <NavItem gridColumn={3}>
      <NavLink href="/sticker-sheet">Thoughts</NavLink>
    </NavItem>
    <NavItem gridColumn={5}>
      <NavLink href="/sticker-sheet">Projects</NavLink>
    </NavItem>
    <NavItem gridColumn={7}>
      <NavLink href="/sticker-sheet">About</NavLink>
    </NavItem>
    <NavItem gridColumn={9}>
      <Menu onClick={() => alert("hey")}>
        <MenuIcon />
      </Menu>
    </NavItem>
  </Grid>
);
