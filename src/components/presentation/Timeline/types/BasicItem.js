import { Link, SubSubHeading, Text, Column } from "@components/core";
import { Tags } from "@components/Tags";
import styled from "@emotion/styled";

const TitleLink = styled(Link)({
  textDecoration: "none",
  color: "var(--text)",
  ":hover": {
    textDecoration: "underline",
  },
});

export const BasicItem = ({ data }) => (
  <Column rg={10} ai="flex-start">
    <Column rg={10} ai="flex-start">
      <TitleLink href={data.route}>
        <SubSubHeading>{data.title}</SubSubHeading>
      </TitleLink>
      <Text>{data.abstract}</Text>
    </Column>
    {data.timeline?.tags && <Tags tags={data.timeline.tags} />}
  </Column>
);
