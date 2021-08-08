import { Flex, Stack } from "@chakra-ui/react";
import { StaggerText } from "./Animation";

const PageTitle = ({ children, height = "70vh" }) => (
  <Flex h={height} justifyContent="center">
    <Flex h="85vh" justifyContent="center" alignItems="center">
      <Flex w="70vw" minW={60} maxW={1000}>
        <StaggerText as={Stack} spacing={4}>
          {children}
        </StaggerText>
      </Flex>
    </Flex>
  </Flex>
);

export default PageTitle;
