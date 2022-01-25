import styled from "@emotion/styled";
import {
  Label,
  Text,
  LinkButton,
  Column,
  ColoredLinkButton,
  Flex,
} from "@components/core";
import { sm } from "@utils/breakpoints";
import { JobHistory } from "./JobHistory";
import { LookingFor } from "./LookingFor";

const Title = styled.h1({
  fontSize: "2.5rem",
  fontFamily: "var(--Montserrat)",
  fontWeight: "600",
  color: "var(--text)",
  marginLeft: "-0.1em",
  [sm]: {
    fontSize: "6.25rem",
  },
});

const Wrapper = styled.div({
  marginTop: "25px",
  color: "var(--text)",
});

const MeImage = styled.img({
  borderRadius: "100%",
  width: "220px",
});

export const Landing = () => (
  <Wrapper>
    <Column rg={5} _css={{ marginBottom: "30px" }}>
      <MeImage src="/img/me.jpeg" />
      <Title>Danny Wray</Title>
      <Label _css={{ fontSize: "0.75rem" }}>Software Developer</Label>
    </Column>
    <Flex jc="center" ai="center" fw="wrap">
      <ColoredLinkButton href="share">Share</ColoredLinkButton>
      <ColoredLinkButton href="share" color="#4e03fc">
        Contact me
      </ColoredLinkButton>
      <ColoredLinkButton href="share" color="#03fc30">
        About
      </ColoredLinkButton>
      <ColoredLinkButton href="share" color="#ff0000">
        Idk
      </ColoredLinkButton>
      <ColoredLinkButton href="share" color="#0000ff">
        something
      </ColoredLinkButton>
    </Flex>
    <JobHistory />
  </Wrapper>
);
