import { Link, SubSubHeading, Text } from "@components/core";
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

const TitleLink = styled(Link)({
  textDecoration: "none",
  color: "var(--text)",
  ":hover": {
    textDecoration: "underline",
  },
});

export const BasicWithImage = ({ data }) => {
  if (!data.timeline.coverImage)
    throw new Error(
      "withImage timeline type requires timeline.coverImage property"
    );
  return (
    <WithBorder>
      <Link href={data.id}>
        <CoverImage src={`/img/${data.timeline.coverImage}`} />
      </Link>
      <TextBox>
        <TitleLink href={data.id}>
          <SubSubHeading _css={{ fontSize: "1rem" }}>
            {data.title}
          </SubSubHeading>
        </TitleLink>
        <Text>{data.blurb}</Text>
      </TextBox>
    </WithBorder>
  );
};
