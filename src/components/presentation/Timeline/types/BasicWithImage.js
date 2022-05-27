import { Link, Heading, Text } from "@components/core";
import styled from "@emotion/styled";

const CoverImage = styled.img({
  width: "100%",
  display: "block",
});

const WithBorder = styled.div({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: "1px solid var(--feintGrey)",
  marginTop: "10px",
});

const TextBox = styled.div({
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  alignItems: "flex-start",
});

export const BasicWithImage = ({ data }) => {
  if (!data.timeline.coverImage)
    throw new Error(
      "withImage timeline type requires timeline.coverImage property"
    );
  return (
    <WithBorder>
      <Link href={data.route}>
        <CoverImage src={`/img/${data.timeline.coverImage}`} />
      </Link>
      <TextBox>
        <Link href={data.route}>
          <Heading as="h2">{data.title}</Heading>
        </Link>
        <Text>{data.abstract}</Text>
      </TextBox>
    </WithBorder>
  );
};
