import styled from "@emotion/styled";
import {
  Label,
  Text,
  LinkButton,
  Column,
  ColoredLinkButton,
  Flex,
  Box,
  SubSubHeading,
  Row,
  Link,
} from "@components/core";
import { md, sm, useBreakpointValue } from "@utils/breakpoints";
import { SocialIcons } from "@components/SocialIcons";
import { JobHistory } from "./JobHistory";

const Title = styled.h1({
  fontSize: "2.5rem",
  fontFamily: "var(--Montserrat)",
  fontWeight: "600",
  color: "var(--text)",
  marginLeft: "-0.1em",
  [sm]: {
    fontSize: "3.4rem",
  },
});

const Wrapper = styled.div({
  marginTop: "25px",
  color: "var(--text)",
});

const MeImage = styled.img({
  borderRadius: "100%",
  width: "200px",
  [sm]: {
    width: "250px",
  },
  [md]: {
    width: "300px",
  },
});

const TitleAndImage = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "30px",
  marginTop: "30px",
  rowGap: 5,
  textAlign: "center",
  [md]: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    columnGap: 40,
    textAlign: "right",
    margin: "75px 0",
  },
});

const TitleText = styled.div({});
const NavLink = styled(Link)({
  color: "var(--text)",
  opacity: 0.7,
});

const WithDot = styled.p({
  fontSize: "1rem",
  fontFamily: "var(--Sora)",
  textAlign: "center",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: 15,

  [md]: {
    justifyContent: "start",
  },
});

export const Landing = () => {
  return (
    <Wrapper>
      <TitleAndImage>
        <MeImage src="/img/me.jpeg" />
        <TitleText>
          <Title>Danny Wray</Title>
          <Label _css={{ fontSize: "0.75rem", marginTop: 10 }}>
            Software Developer
          </Label>
        </TitleText>
      </TitleAndImage>
      <Flex
        _css={{ margin: "15px auto", maxWidth: 680 }}
        rg={20}
        cg={60}
        dir="column"
      >
        <WithDot>
          <NavLink href="/">thoughts</NavLink>
          <NavLink href="/">projects</NavLink>
          <NavLink href="/">about</NavLink>
          <NavLink href="/">contact</NavLink>
          <NavLink href="/">linkedin</NavLink>
          <NavLink href="/">github</NavLink>
          <NavLink href="/">twitter</NavLink>
        </WithDot>
        <WithDot>
          <span>Software Engineer at Capital One.</span>
          <span>Nottingham, UK.</span>
          <span>Boba Tea Enthusiast.</span>
        </WithDot>
        <Text
          _css={{
            fontSize: "0.9rem",
            fontFamily: "var(--Sora)",
            opacity: 0.6,
            paddingLeft: "10px",
            borderLeft: "solid 1px var(--text)",
            [md]: {
              paddingLeft: "0",
              borderLeft: "none",
            },
          }}
        >
          Hi, I'm Danny. A Theoretical Physics Graduate from the University of
          Nottingham. Sometimes the hardest part about learning physics is
          knowing where to look for information. I'm working through my
          university notes and uploading a typeset version of everything I
        </Text>
        <Text _css={{ fontSize: "0.9rem" }}>
          I'm open to Lorem impsum, dolor sit amet and yes
        </Text>
      </Flex>
    </Wrapper>
  );
};
