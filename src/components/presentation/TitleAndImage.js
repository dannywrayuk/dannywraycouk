import styled from "@emotion/styled";
import { lg, md, sm, xl } from "@utils/breakpoints";
import { Label, Text, Link, BubbleHighlight, Column } from "@components/core";

const MeImage = styled.img({
  clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
  height: "200px",
  width: "200px",
  [sm]: {
    height: "250px",
    width: "250px",
  },
  [md]: {
    height: "280px",
    width: "280px",
  },
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

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

export const TitleAndImage = () => {
  return (
    <Wrapper>
      <MeImage src="/img/me.jpeg" />
      <div>
        <Title>Danny Wray</Title>
        <TitleLabel>Software Developer</TitleLabel>
      </div>
    </Wrapper>
  );
};
