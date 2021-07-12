import { Stack, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

const PostHeading = ({ title, date }) => {
  const responsiveFontSize = useBreakpointValue({ base: 50, sm: 60, md: 90 });
  return (
    <Stack mb={10} spacing={10}>
      <Heading fontSize={responsiveFontSize}>{title}</Heading>
      <Text textTransform="uppercase" fontWeight={300} letterSpacing={2}>
        {date}
      </Text>
    </Stack>
  );
};

export default PostHeading;
