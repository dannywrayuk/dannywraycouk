import { Flex } from "@chakra-ui/react";
import { Description, Title } from "./Text";

export const ImageCard = ({ children, image, reverse, ...rest }) => (
  <Flex
    direction={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
    justifyContent="space-evenly"
    alignItems="center"
    mb={40}
    {...rest}
  >
    <Flex
      direction="column"
      px={{ base: 0, lg: 5 }}
      minW={{ base: 0, lg: "480px" }}
      maxW={{ base: "100%", lg: "50%" }}
      mb={10}
    >
      {children}
    </Flex>
    <Flex
      justifyContent="center"
      minW={{ base: 0, lg: "480px" }}
      maxW={{ base: "100%", lg: "50%" }}
      px={{ base: 0, lg: 5 }}
    >
      {image}
    </Flex>
  </Flex>
);

export const ImageCardTitle = (props) => (
  <Title fontSize={40} mb={5} {...props} />
);

export const ImageCardText = (props) => <Description mb={3} {...props} />;
