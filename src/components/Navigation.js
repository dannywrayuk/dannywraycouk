import styled from "@emotion/styled";
import { Link, Button } from "@components/core";
import { IoMenu } from "react-icons/io5";
import { md, sm } from "@utils/breakpoints";
import { useReveal } from "@utils/useReveal";
import { CommandPalette } from "./CommandPalette";
import { useEffect } from "react";

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
  padding: "8px",
  clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
  transition: "0.5s",
  [sm]: {
    marginLeft: "auto",
  },
  ":hover": {
    backgroundColor: "var(--primary)",
  },
});

const MenuIcon = styled(IoMenu)({
  width: "22px",
  height: "22px",
  color: "var(--text)",
});

export const Navigation = () => {
  const [isOpen, setOpen, setClose, toggleState] = useReveal(false);
  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) html.setAttribute("scrollOff", "");
    else html.removeAttribute("scrollOff");
  }, [isOpen]);
  return (
    <>
      {isOpen && <CommandPalette close={setClose} />}
      <Grid>
        <Logo href="/">danny.</Logo>
        <Menu onClick={setOpen}>
          <MenuIcon />
        </Menu>
      </Grid>
    </>
  );
};
