import { Link, Heading, Text, Flex } from "@components/core";
import styled from "@emotion/styled";

const Wrapper = styled.div({ marginBottom: "20px" });

const ImageWrapper = styled.div({
  borderRadius: "1em",
  width: "100%",
  height: "fit-content",
  overflow: "hidden",
  aspectRatio: "16 / 9",
});

const Image = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const ProjectCard = ({ data }) => (
  <Wrapper>
    <Link href={data.route}>
      <ImageWrapper>
        <Image src={data.image} />
      </ImageWrapper>
    </Link>
    <Flex center column mt={10}>
      <Link href={data.route} underline="hover" noCol>
        <Heading as="h2" size="md" center>
          {data.title}
        </Heading>
      </Link>
      <Text center>{data.abstract}</Text>
    </Flex>
  </Wrapper>
);
