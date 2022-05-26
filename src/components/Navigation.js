import styled from "@emotion/styled";
import { Link, Button, Text, Icon } from "@components/core";
import { IoMenu } from "react-icons/io5";
import { mq } from "@utils/breakpoints";
import { useReveal } from "@utils/useReveal";
import { CommandPalette } from "./CommandPalette";
import { useCallback, useEffect } from "react";

const Grid = styled.div({
  display: "grid",
  paddingTop: "25px",
  alignItems: "center",
  justifyItems: "center",
  gridTemplateColumns: "85px 1fr 85px",
  [mq.sm]: {
    paddingTop: "45px",
  },
});

const LogoText = styled(Text)({
  fontSize: "1.5rem",
  fontFamily: "var(--Montserrat)",
  fontWeight: "700",
  letterSpacing: "-0.05em",
  textAlign: "center",
  justifySelf: "left",
  ":hover": { color: "var(--color-brand-primary)" },
});

const Menu = styled(Button)({
  margin: "0 10px 0 auto",
  gridColumn: 3,
  padding: "8px",
  transition: "0.1s",
  borderRadius: "0.5em",
  [mq.sm]: {
    marginLeft: "auto",
  },
  ":hover": {
    backgroundColor: "var(--color-bg-muted)",
  },
});

export const Navigation = () => {
  const [isOpen, setOpen, setClose, toggleState] = useReveal(false);

  const closeOnEscape = useCallback((e) => {
    if (e.code === "Escape") setClose();
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.setAttribute("scrollOff", "");
      document.addEventListener("keyup", closeOnEscape, true);
    } else {
      html.removeAttribute("scrollOff");
    }
    return () => document.removeEventListener("keyup", closeOnEscape, true);
  }, [isOpen]);
  return (
    <>
      {isOpen && <CommandPalette close={setClose} />}
      <Grid>
        <Link href="/" underline="none">
          <LogoText>danny.</LogoText>
        </Link>
        <Menu onClick={setOpen}>
          <Icon as={IoMenu} />
        </Menu>
      </Grid>
    </>
  );
};
