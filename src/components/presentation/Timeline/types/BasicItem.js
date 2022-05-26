import { Link, Heading, Text, Flex } from "@components/core";
import { Tags } from "@components/Tags";

export const BasicItem = ({ data }) => (
  <Flex column rg={10} ai="flex-start">
    <Flex column rg={10} ai="flex-start">
      <Link href={data.route}>
        <Heading>{data.title}</Heading>
      </Link>
      <Text>{data.abstract}</Text>
    </Flex>
    {data.timeline?.tags && <Tags tags={data.timeline.tags} />}
  </Flex>
);
