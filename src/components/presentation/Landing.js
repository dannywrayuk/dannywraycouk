import { Text, Link, Flex, LinkButton, Box } from "@components/core";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import { links } from "@utils/constants";

const Wrapper = styled(Box)({
  border: "1px solid var(--color-border-default)",
  borderRadius: "0.5em",
  padding: "15px",
  position: "relative",
});

const FloatingBubble = styled(LinkButton)({
  border: "1px solid var(--color-border-default)",
  borderRadius: "1em",
  padding: "0 10px",
  position: "absolute",
  background: "var(--color-bg-subtle)",
  bottom: 0,
  right: "50%",
  transform: "translate(50%, 70%)",
  [mq.sm]: {
    right: "2%",
    transform: "translate(0, 50%)",
  },
});

const WrapperSubtle = styled(Wrapper)({
  background: "var(--color-bg-subtle)",
});

export const Landing = () => {
  return (
    <>
      <TitleAndImage />
      <Flex cg={15} rg={10} flexWrap center>
        <Text weight={600} center>
          👨🏻‍💻 Software Engineer at Capital One.
        </Text>
        <Text weight={600} center>
          📍 Nottingham, UK.
        </Text>
        <Text weight={600} center>
          🧋 Boba Tea Enthusiast.
        </Text>
      </Flex>
      <Wrapper>
        <Text>
          I'm in love with <b>building websites</b>, everything from design to
          devtools. Currently, I work on the customer acquisition platform at
          Capital One.
        </Text>
        <FloatingBubble href="/about" underline="none" noWrap noCol>
          <Text>
            Read more
            {" ✨"}
          </Text>
        </FloatingBubble>
      </Wrapper>
      <WrapperSubtle>
        <Text center>
          I'm open to freelance and speaking at events. Please don't hesitate to{" "}
          <Link href={links.mail} noWrap>
            get in touch
          </Link>
          {" ☎️."}
        </Text>
      </WrapperSubtle>
    </>
  );
};
