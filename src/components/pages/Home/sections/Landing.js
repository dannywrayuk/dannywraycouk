import styled from "@emotion/styled";
import {
  Label,
  Text,
  Flex,
  Link,
  BubbleHighlight,
  Column,
} from "@components/core";
import { md, sm, xl } from "@utils/breakpoints";

const Wrapper = styled.div({
  marginTop: "25px",
  color: "var(--text)",
});

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
const TitleLabel = styled(Label)({
  marginTop: 10,
  fontSize: "0.75rem",
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

const LinksAndIntroduction = styled(Column)({
  flexDirection: "column",
  margin: "15px auto",
  maxWidth: 680,
  rowGap: 20,
  columnGap: 60,
  alignItems: "stretch",
});

const NavLink = styled(Link)({
  color: "var(--text)",
  opacity: 0.7,
});

const ListWithWrap = styled.div({
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

const IntroductionText = styled(Text)({
  fontFamily: "var(--Sora)",
  paddingLeft: "10px",
  borderLeft: "solid 1px var(--text)",
  [md]: {
    paddingLeft: "0",
    borderLeft: "none",
  },
});

export const Landing = () => {
  return (
    <Wrapper>
      <TitleAndImage>
        <MeImage src="/img/me.jpeg" />
        <div>
          <Title>Danny Wray</Title>
          <TitleLabel>Software Developer</TitleLabel>
        </div>
      </TitleAndImage>
      <LinksAndIntroduction>
        <ListWithWrap>
          <NavLink href="/">thoughts</NavLink>
          <NavLink href="/">projects</NavLink>
          <NavLink href="/">about</NavLink>
          <NavLink href="/">contact</NavLink>
          <NavLink href="/">linkedin</NavLink>
          <NavLink href="/">github</NavLink>
          <NavLink href="/">twitter</NavLink>
        </ListWithWrap>
        <ListWithWrap>
          <span>Software Engineer at Capital One.</span>
          <span>Nottingham, UK.</span>
          <span>Boba Tea Enthusiast.</span>
        </ListWithWrap>
        <IntroductionText>
          Hi, I'm Danny. A Theoretical Physics Graduate from the University of
          Nottingham. Sometimes the hardest part about learning physics is
          knowing where to look for information. I'm working through my
          university notes and uploading a typeset version of everything I
        </IntroductionText>
        <Text>
          I'm open to <BubbleHighlight>Lorem impsum</BubbleHighlight>
          {", "}
          <BubbleHighlight>dolor sit amet</BubbleHighlight> and{" "}
          <BubbleHighlight>yes</BubbleHighlight>.
        </Text>
      </LinksAndIntroduction>
    </Wrapper>
  );
};
