import { Box, Stack } from "@chakra-ui/react";
import Tags from "./Tags";
import { Title } from "./Text";

const TitledSection = ({ title, tags, children, ...rest }) => (
  <Stack
    mb={220}
    display={{ base: "flex", sm: "block" }}
    spacing={10}
    {...rest}
  >
    <Box>
      <Title>{title}</Title>
      {tags && <Tags tags={tags} />}
    </Box>
    {children}
  </Stack>
);

export default TitledSection;
