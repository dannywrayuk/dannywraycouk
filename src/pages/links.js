import styled from "@emotion/styled";
import { Column, SubSubHeading, Text, Link, Row } from "@components/core";
import { Layout } from "@components/Layout";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import constants from "@utils/constants";

const Wrapper = styled(Column)({
  maxWidth: "300px",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
});

const Icon = styled.div({
  width: "22px",
  height: "22px",
});

const RoundedColorBubble = styled.div(
  {
    padding: "20px",
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
      <Wrapper>
        <RoundedColorBubble
          bg="var(--primary30)"
          col="var(--text)"
          as="a"
          href={constants.links.twitter}
        >
          <Column cg={10} rg={10}>
            <Text>I am open to doing things </Text>
            <RoundedColorBubble bg="var(--primary)" col="black" size="10px">
              <Column>
                <Text>Contact</Text>
              </Column>
            </RoundedColorBubble>
          </Column>
        </RoundedColorBubble>
        <RoundedColorBubble
          bg="var(--twitter)"
          col="white"
          as="a"
          href={constants.links.twitter}
        >
          <Row cg={10} _css={{ paddingRight: "16px" }}>
            <Icon as={AiOutlineTwitter} />
            <Text>Twitter</Text>
          </Row>
        </RoundedColorBubble>
        <RoundedColorBubble
          bg="var(--linkedin)"
          col="white"
          as="a"
          href={constants.links.linkedin}
        >
          <Row cg={10} _css={{ paddingRight: "16px" }}>
            <Icon as={AiFillLinkedin} />
            <Text>LinkedIn</Text>
          </Row>
        </RoundedColorBubble>
        <RoundedColorBubble
          bg="var(--github)"
          col="white"
          as="a"
          href={constants.links.github}
        >
          <Row cg={10} _css={{ paddingRight: "16px" }}>
            <Icon as={AiOutlineGithub} />
            <Text>Github</Text>
          </Row>
        </RoundedColorBubble>
      </Wrapper>
    </Layout>
  );
};

export default Home;
