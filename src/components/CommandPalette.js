import styled from "@emotion/styled";
import { md } from "@utils/breakpoints";
import { createPortal } from "react-dom";
import { Text } from "./core";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineCloud,
} from "react-icons/ai";
import { HiOutlineFolder } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { Shortcut } from "./Shortcut";
import { toggleColourMode } from "@utils/toggleColourMode";

const Overlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#aaaaaa44",
  backdropFilter: "blur(2px)",
  touchAction: "none",
});

const BodyWrapper = styled.div({
  backgroundColor: "white",
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  top: 0,
  width: "100%",
  overflow: "hidden",
  border: "1px solid #ddd",
  [md]: {
    top: "20%",
    width: "600px",
    borderRadius: "15px",
  },
});

const SearchInput = styled.input({
  width: "100%",
  height: "60px",
  outline: "none",
  border: "none",
  padding: "0 25px",
  fontFamily: "var(--Sora)",
  fontSize: "0.9rem",
  borderBottom: "1px solid #eee",
});

const SuggestionsWrapper = styled.div({
  maxHeight: "400px",
  overflowY: "scroll",
});

const Section = styled.div({
  padding: "0 25px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eee",
  color: "var(--Text)",
  fontWeight: "600",
});

const Item = styled.div({
  padding: "0 30px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  columnGap: "15px",
  color: "#888",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#ffe",
    color: "var(--primary)",
  },
});

const ShortcutItem = styled.div({
  padding: "0 30px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  columnGap: "15px",
  color: "#888",
  cursor: "default",
  justifyContent: "space-between",
});

const Icon = styled.div({ width: "22px", height: "22px" });

const Suggestions = () => (
  <SuggestionsWrapper>
    <Section>
      <Text>Quick Actions</Text>
    </Section>
    <Item onClick={toggleColourMode}>
      <Icon as={BiMoon} />
      <Text>Toggle Colour Theme</Text>
    </Item>
    <Section>
      <Text>Navigation</Text>
    </Section>
    <Item>
      <Icon as={AiOutlineCloud} />
      <Text>Thoughts</Text>
    </Item>
    <Item>
      <Icon as={HiOutlineFolder} />
      <Text>Projects</Text>
    </Item>
    <Item>
      <Icon as={BsPerson} />
      <Text>About</Text>
    </Item>
    <Section>
      <Text>Links</Text>
    </Section>
    <Item>
      <Icon as={AiOutlineGithub} />
      <Text>Github</Text>
    </Item>
    <Item>
      <Icon as={AiFillLinkedin} />
      <Text>LinkedIn</Text>
    </Item>
    <Item>
      <Icon as={AiOutlineTwitter} />
      <Text>Twitter</Text>
    </Item>
    <Section>
      <Text>Shortcuts</Text>
    </Section>
    <ShortcutItem>
      <Text>Open Command Palette</Text>
      <Shortcut keys={["ctrl", "k"]} />
    </ShortcutItem>
    <ShortcutItem>
      <Text>Toggle Dark Mode</Text>
      <Shortcut keys={["ctrl", "t"]} />
    </ShortcutItem>
    <ShortcutItem>
      <Text>Close Command Palette</Text>
      <Shortcut keys={["esc"]} />
    </ShortcutItem>
  </SuggestionsWrapper>
);

const Body = () => (
  <BodyWrapper>
    <SearchInput placeholder="Type here to find things" />
    <Suggestions />
  </BodyWrapper>
);

const WithOverlay = ({ close }) => (
  <>
    <Overlay onClick={close} />
    <Body />
  </>
);

export const CommandPalette = (props) =>
  createPortal(<WithOverlay {...props} />, document.getElementById("portal"));
