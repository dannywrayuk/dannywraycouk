import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import { createPortal } from "react-dom";
import { Icon, Link, Text, Button } from "./core";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { HiOutlineFolder } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { toggleColourMode } from "@utils/toggleColourMode";
import { useState } from "react";
import { MdOutlineArticle } from "react-icons/md";
import { useSearch } from "@utils/useSearch";

const Overlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "var(--color-overlay-default)",
  backdropFilter: "blur(2px)",
  touchAction: "none",
});

const BodyWrapper = styled.div({
  backgroundColor: "var(--color-bg-default)",
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  top: 0,
  width: "100%",
  overflow: "hidden",
  border: "1px solid var(--color-border-default)",
  [mq.md]: {
    top: "20%",
    width: "600px",
    borderRadius: "15px",
  },
});

const SearchInput = styled.input({
  backgroundColor: "var(--color-bg-default)",
  color: "var(--color-fg-default)",
  width: "100%",
  height: "60px",
  border: "none",
  outline: "none",
  padding: "0 25px",
  fontFamily: "var(--Sora)",
  fontSize: "0.9rem",
  borderBottom: "1px solid var(--color-border-default)",
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
  backgroundColor: "var(--color-bg-subtle)",
  fontWeight: "600",
});

const Item = styled.div({
  padding: "0 30px",
  height: "50px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  columnGap: "15px",
  color: "var(--color-fg-subtle)",
  ":hover": {
    color: "var(--color-fg-link)",
  },
});

const Suggestions = () => (
  <SuggestionsWrapper>
    <Section>
      <Text>Quick Actions</Text>
    </Section>
    <Item as={Button} onClick={toggleColourMode}>
      <Icon as={BiMoon} />
      <Text>Toggle Colour Theme</Text>
    </Item>
    <Section>
      <Text>Navigation</Text>
    </Section>
    <Link href="/about" variant="noStyle">
      <Item>
        <Icon as={BsPerson} />
        <Text>About</Text>
      </Item>
    </Link>
    <Link href="/projects" variant="noStyle">
      <Item>
        <Icon as={HiOutlineFolder} />
        <Text>Projects</Text>
      </Item>
    </Link>
    <Section>
      <Text>Social</Text>
    </Section>
    <Link href="/github" variant="noStyle">
      <Item>
        <Icon as={AiOutlineGithub} />
        <Text>Github</Text>
      </Item>
    </Link>
    <Link href="/linkedin" variant="noStyle">
      <Item>
        <Icon as={AiFillLinkedin} />
        <Text>LinkedIn</Text>
      </Item>
    </Link>
    <Link href="/twitter" variant="noStyle">
      <Item>
        <Icon as={AiOutlineTwitter} />
        <Text>Twitter</Text>
      </Item>
    </Link>
  </SuggestionsWrapper>
);

const Results = ({ searchResults }) => (
  <SuggestionsWrapper>
    <Section>
      <Text>Results: {searchResults.length}</Text>
    </Section>
    {searchResults.map((r, id) => (
      <Item key={id + "searchResult"} as={Link} href={r.item.route}>
        <Icon as={MdOutlineArticle} />
        <Text>{r.item.title}</Text>
      </Item>
    ))}
  </SuggestionsWrapper>
);

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchFunction = useSearch();
  return (
    <BodyWrapper>
      <SearchInput
        placeholder="Type here to find things"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {searchTerm.length > 2 ? (
        <Results searchResults={searchFunction(searchTerm)} />
      ) : (
        <Suggestions />
      )}
    </BodyWrapper>
  );
};

export const CommandPalette = ({ close }) =>
  createPortal(
    <>
      <Overlay onClick={close} />
      <Body />
    </>,
    document.getElementById("portal")
  );
