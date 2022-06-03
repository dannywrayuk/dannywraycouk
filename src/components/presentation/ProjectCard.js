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
    <ImageWrapper>
      <Image src={data.image} />
    </ImageWrapper>
    <Flex center column mt={10}>
      <Link href={data.route}>
        <Heading as="h2" size="md" center>
          {data.title}
        </Heading>
      </Link>
      <Text center>{data.abstract}</Text>
    </Flex>
  </Wrapper>
);
