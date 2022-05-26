import styled from "@emotion/styled";
import { Flex, Icon, Text } from "@components/core";
import { Layout } from "@components/Layout";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { links } from "@utils/constants";

const Wrapper = styled(Flex)({
  maxWidth: "300px",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
});

const RoundedColorBubble = styled.div(
  {
    padding: "12px",
    borderRadius: "10px",
    width: "100%",
    textDecoration: "none",
  },
  ({ bg, col, size }) => ({ backgroundColor: bg, color: col, padding: size })
);

const Home = () => {
  return (
    <Layout>
      <TitleAndImage />
      <Wrapper column>
        <RoundedColorBubble
          bg="var(--primary30)"
          col="var(--color-fg-default)"
          as="a"
          href={links.mail}
        >
          <Flex column cg={10} rg={10}>
            <Text>I'm open to making things</Text>
            <RoundedColorBubble
              bg="var(--color-brand-primary)"
              col="black"
              size="10px"
            >
              <Flex column>
                <Text>Contact</Text>
              </Flex>
            </RoundedColorBubble>
          </Flex>
        </RoundedColorBubble>
        <RoundedColorBubble
          bg="var(--color-twitter)"
          col="white"
          as="a"
          href={links.twitter}
        >
          <Flex cg={10} _css={{ paddingRight: "16px" }}>
            <Icon as={AiOutlineTwitter} />
            <Text>Twitter</Text>
          </Flex>
        </RoundedColorBubble>
        <RoundedColorBubble
          bg="var(--color-linkedin)"
          col="white"
          as="a"
          href={links.linkedin}
        >
          <Flex cg={10} _css={{ paddingRight: "16px" }}>
            <Icon as={AiFillLinkedin} />
            <Text>LinkedIn</Text>
          </Flex>
        </RoundedColorBubble>
        <RoundedColorBubble
          bg="var(--color-github)"
          col="white"
          as="a"
          href={links.github}
        >
          <Flex cg={10} _css={{ paddingRight: "16px" }}>
            <Icon as={AiOutlineGithub} />
            <Text>Github</Text>
          </Flex>
        </RoundedColorBubble>
      </Wrapper>
    </Layout>
  );
};

export default Home;
