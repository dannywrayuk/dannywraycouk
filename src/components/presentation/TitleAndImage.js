import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import { Flex, CapsText, Image } from "@components/core";
import { hexagonClipPath } from "@utils/constants";

const MeImage = styled.div({
  clipPath: hexagonClipPath,
  position: "relative",
  height: "200px",
  width: "200px",
  [mq.sm]: {
    height: "250px",
    width: "250px",
  },
  [mq.md]: {
    height: "280px",
    width: "280px",
  },
});

const Title = styled.h1({
  fontSize: "2.5rem",
  fontFamily: "var(--Montserrat)",
  fontWeight: "600",
  [mq.sm]: {
    fontSize: "3.4rem",
  },
});

const Wrapper = styled(Flex)({
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  rowGap: 5,
  columnGap: 40,
  [mq.md]: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    textAlign: "right",
  },
});

export const TitleAndImage = () => {
  return (
    <Wrapper mt={30}>
      <MeImage>
        <Image
          src="/img/me.jpeg"
          layout="fill"
          priority
          sizes={{ sm: "200px", md: "300px", max: "600px" }}
        />
      </MeImage>
      <Flex column rg={10}>
        <Title>Danny Wray</Title>
        <CapsText size="xs">Software Developer</CapsText>
      </Flex>
    </Wrapper>
  );
};
