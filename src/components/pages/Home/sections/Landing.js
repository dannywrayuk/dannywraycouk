import styled from "@emotion/styled";
import { Label, Text, LinkButton } from "@components/core";
import { lg, md } from "@utils/breakpoints";
import { ReactComponent as Animated } from "../../../../../public/img/animated.svg";

const Title = styled.h1({
  fontSize: "6.25rem",
  fontFamily: "var(--Montserrat)",
  fontWeight: "600",
  color: "var(--text)",
  marginLeft: "-0.1em",
});

const Wrapper = styled.div({
  marginTop: "25px",
  color: "var(--text)",
  [md]: {
    marginLeft: "35px",
  },
});

const InfoContainer = styled.div({ marginTop: "60px", maxWidth: "480px" });

const ButtonContainer = styled.div({
  display: "inline-flex",
  justifyContent: "center",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "20px",
  marginTop: "40px",
  [md]: {
    justifyContent: "space-between",
  },
});

const BG = styled.img({
  position: "absolute",
  right: "10%",
  width: "200px",
  zIndex: -1,
  [md]: {
    width: "300px",
  },
  [lg]: {
    width: "400px",
  },
});

export const Landing = () => (
  <Wrapper>
    {/* <BG src="/img/gen.png" /> */}
    <Title>Danny Wray</Title>
    <Label>Software Developer</Label>
    <InfoContainer>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis.
      </Text>
      <ButtonContainer>
        <LinkButton href="/test" variant="primary" withArrow>
          <Text>Learn more</Text>
        </LinkButton>
        <LinkButton href="/test" variant="secondary" withArrow>
          <Text>Contact me</Text>
        </LinkButton>
      </ButtonContainer>
    </InfoContainer>
  </Wrapper>
);
