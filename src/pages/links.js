import styled from "@emotion/styled";
import {
  BorderBox,
  Flex,
  Heading,
  Icon,
  LinkButton,
  Text,
} from "@components/core";
import { Layout } from "@components/Layout";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { hexagonClipPath, links } from "@utils/constants";
import { mq } from "@utils/breakpoints";
import { MetaTags } from "@components/Head";

const StyledLink = styled(LinkButton)(({ bg, black }) => ({
  padding: "12px",
  border: "none",
  backgroundColor: `var(--color-${bg})`,
  color: black ? "black" : "white",
  minWidth: "100%",
  ":hover": {
    backgroundColor: `var(--color-${bg})`,
  },
  [mq.sm]: {
    minWidth: 300,
  },
}));

const MeImage = styled.img({
  clipPath: hexagonClipPath,
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

const DirectionFlip = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: "40px",
  columnGap: "100px",
  [mq.md]: {
    flexDirection: "row",
  },
});

const meta = {
  title: "Links",
  abstract: "All the links you might need if you want to contact me.",
  route: "/links",
};

const Links = () => {
  return (
    <Layout>
      <MetaTags meta={meta} />
      <DirectionFlip>
        <Flex center column>
          <MeImage src="/img/me.jpeg" />
          <Heading>@dannywrayuk</Heading>
        </Flex>
        <Flex center rg="30px" column>
          <StyledLink bg="brand-primary" href={links.mail} black>
            <Flex cg={10} _css={{ paddingRight: "16px" }} center>
              <Icon as={AiOutlineMail} />
              <Text>Email</Text>
            </Flex>
          </StyledLink>
          <StyledLink bg="twitter" href="/">
            <Flex cg={10} _css={{ paddingRight: "16px" }} center>
              <Icon as={AiOutlineTwitter} />
              <Text>Twitter</Text>
            </Flex>
          </StyledLink>
          <StyledLink bg="github" href={links.github}>
            <Flex cg={10} _css={{ paddingRight: "16px" }} center>
              <Icon as={AiOutlineGithub} />
              <Text>Github</Text>
            </Flex>
          </StyledLink>
          <StyledLink bg="linkedin" href={links.linkedin}>
            <Flex cg={10} _css={{ paddingRight: "16px" }} center>
              <Icon as={AiFillLinkedin} />
              <Text>LinkedIn</Text>
            </Flex>
          </StyledLink>
        </Flex>
      </DirectionFlip>
    </Layout>
  );
};

export default Links;
