import styled from "@emotion/styled";
import { Label, Text, LinkButton } from "@components/core";

const Title = styled.h1({
  fontSize: "6.25rem",
  fontFamily: "var(--Montserrat)",
  fontWeight: "600",
  color: "var(--text)",
  marginLeft: "-0.1em",
});

const Wrapper = styled.div({
  marginTop: "125px",
  marginLeft: "70px",
  color: "var(--text)",
});
const InfoContainer = styled.div({ width: "480px", marginTop: "60px" });
const ButtonContainer = styled.div({
  display: "inline-flex",
  justifyContent: "space-between",
  columnGap: "30px",
  marginTop: "40px",
});

export const Landing = () => (
  <Wrapper>
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
