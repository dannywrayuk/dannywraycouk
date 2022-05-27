import { Link, Heading, Text, Flex } from "@components/core";

export const BasicItem = ({ data }) => (
  <Flex column rg={10} ai="flex-start">
    <Link href={data.route}>
      <Heading as="h2">{data.title}</Heading>
    </Link>
    <Text>{data.abstract}</Text>
  </Flex>
);
