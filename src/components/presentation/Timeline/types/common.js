import { Box, Flex, Heading, Link, Text } from "@components/core";
import { Mapper } from "@components/Mapper";
import styled from "@emotion/styled";

export const BasicItemWrapper = styled.div({
  position: "relative",
  width: "100%",
  border: "1px solid var(--color-border-default)",
  borderRadius: "0.5em",
  overflow: "hidden",
  backgroundColor: "var(--color-bg-default)",
});

const Tag = ({ data }) => <span>#{data} </span>;

export const BasicBottom = ({ data }) => (
  <Box p="15px">
    <Heading size="xl" mb="10px">
      <Link href={data.route} variant="noStyleHover">
        {data.title}
      </Link>
    </Heading>
    <Text>{data.abstract}</Text>
    {data.tags && (
      <Text color="var(--color-fg-subtle)">
        <Mapper data={data.tags} Component={Tag} />
      </Text>
    )}
  </Box>
);

export const ImageWrapper = styled(Flex)({
  position: "relative",
  width: "100%",
  height: "auto",
  overflow: "hidden",
  aspectRatio: "16 / 9",
});
