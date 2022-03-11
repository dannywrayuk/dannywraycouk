import styled from "@emotion/styled";
import { md } from "@utils/breakpoints";
import { createPortal } from "react-dom";
import { Text } from "./core";

const Overlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#00000044",
  backdropFilter: "blur(2px)",
});

const BodyWrapper = styled.div({
  backgroundColor: "white",
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  top: 0,
  width: "100%",
  overflow: "hidden",
  borderBottom: "1px solid #00000055",
  [md]: {
    top: "20%",
    width: "600px",
    borderRadius: "15px",
    border: "1px solid #00000055",
  },
});

const SearchInput = styled.input({
  width: "100%",
  height: "60px",
  outline: "none",
  border: "none",
  padding: "0 30px",
  fontFamily: "var(--Sora)",
  fontSize: "1.25rem",
});

const SuggestionsWrapper = styled.div({
  maxHeight: "400px",
  overflowY: "scroll",
});

const Section = styled.div({
  padding: "0 30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "grey",
});

const Item = styled.div({
  padding: "0 30px",
  height: "50px",
  display: "flex",
  alignItems: "center",
});

const Suggestions = () => (
  <SuggestionsWrapper>
    <Section>
      <Text>Navigation</Text>
    </Section>
    <Item>Toggle Colour Mode</Item>
    <Item>Toggle Colour Mode</Item>
    <Section>Navigation</Section>
    <Item>Toggle Colour Mode</Item>
    <Item>Toggle Colour Mode</Item>
    <Section>Navigation</Section>
    <Item>Toggle Colour Mode</Item>
    <Item>Toggle Colour Mode</Item>
    <Item>Toggle Colour Mode</Item>
    <Item>Toggle Colour Mode</Item>
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
