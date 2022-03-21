import styled from "@emotion/styled";
import { Label, Text, Link, BubbleHighlight, Column } from "@components/core";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import { lg, md, sm, xl } from "@utils/breakpoints";
import constants from "@utils/constants";

const Wrapper = styled.div({
  marginTop: "25px",
  color: "var(--text)",
});

const LinksAndIntroduction = styled(Column)({
  flexDirection: "column",
  margin: "45px auto 0px",
  maxWidth: 680,
  rowGap: 20,
  columnGap: 60,
  alignItems: "stretch",
});

const NavLink = styled(Link)({
  color: "var(--text)",
  opacity: 0.7,
  textDecoration: "underline",
});

const NavA = styled.a({
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
  textAlign: "center",
  [md]: {
    textAlign: "left",
    paddingLeft: "0",
    borderLeft: "none",
  },
});

export const Landing = () => {
  return (
    <Wrapper>
      <TitleAndImage />
      <LinksAndIntroduction>
        <ListWithWrap>
          <NavLink href="/thoughts">thoughts</NavLink>
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/">about</NavLink>
          <NavLink href="/">contact</NavLink>
          <NavA href={constants.links.linkedin}>linkedin</NavA>
          <NavA href={constants.links.github}>github</NavA>
          <NavA href={constants.links.twitter}>twitter</NavA>
        </ListWithWrap>
        <ListWithWrap>
          <span>Software Engineer at Capital One.</span>
          <span>Nottingham, UK.</span>
          <span>Boba Tea Enthusiast.</span>
        </ListWithWrap>
        <IntroductionText as="div">
          Hi, I'm Danny. A Theoretical Physics Graduate from the University of
          Nottingham. Sometimes the hardest part about learning physics is
          knowing where to look for information. I'm working through my
          university notes and uploading a typeset version of everything I
          <div style={{ height: "10px" }} />
          I'm open to{" "}
          <Link href="/">
            <BubbleHighlight>speaking</BubbleHighlight>
          </Link>
          {" and "}
          <Link href="/">
            <BubbleHighlight>freelance</BubbleHighlight>
          </Link>
          .
        </IntroductionText>
      </LinksAndIntroduction>
    </Wrapper>
  );
};
