import { Link, SubSubHeading, Text, Column } from "@components/core";
import { Tags } from "@components/Tags";

export const BasicItem = ({ data }) => (
  <Column rg={10} ai="flex-start">
    <Link href={data.id}>
      <Column rg={10} ai="flex-start">
        <SubSubHeading>{data.title}</SubSubHeading>
        <Text>{data.blurb}</Text>
      </Column>
    </Link>
    {data.timeline?.tags && <Tags tags={data.timeline.tags} />}
  </Column>
);
