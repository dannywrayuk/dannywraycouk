import { Box } from "@chakra-ui/react";
import Tags from "./Tags";
import { Title } from "./Text";

const TitledSection = ({ title, tags, children, ...rest }) => (
  <Box mb={20} {...rest}>
    <Title>{title}</Title>
    {tags && <Tags tags={tags} />}
    {children}
  </Box>
);

export default TitledSection;
