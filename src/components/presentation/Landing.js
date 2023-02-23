import { Text, Link, Flex, LinkButton, BorderBox } from "@components/core";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";

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

const IntroText = styled(Text)({
  textAlign: "center",
  [mq.sm]: {
    textAlign: "left",
  },
});

const EmojiBanner = () => (
  <Flex cg={15} rg={10} flexWrap center>
    <Text weight={600} center>
      👨🏻‍💻 Software Engineer at The Lego Group.
    </Text>
    <Text weight={600} center>
      📍 London, UK.
    </Text>
    <Text weight={600} center>
      🧋 Boba Tea Enthusiast.
    </Text>
  </Flex>
);

const IntroBanner = () => (
  <BorderBox bg="bg-default">
    <IntroText>
      I love javascript and building websites. I'm currently working full stack
      to enhance the VIP experience at The Lego Group.
    </IntroText>
    <FloatingBubble href="/about" variant="noStyle" noWrap>
      <Text>
        Read more
        {" ✨"}
      </Text>
    </FloatingBubble>
  </BorderBox>
);

const ContactBanner = () => (
  <BorderBox bg="bg-subtle">
    <Text center>
      I'm open to freelance and speaking at events. Please don't hesitate to{" "}
      <Link href="/links" noWrap>
        get in touch
      </Link>
      {" ☎️."}
    </Text>
  </BorderBox>
);

export const Landing = () => {
  return (
    <>
      <TitleAndImage />
      <EmojiBanner />
      <IntroBanner />
      <ContactBanner />
    </>
  );
};
