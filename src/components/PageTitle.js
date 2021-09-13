import { Flex, Stack } from "@chakra-ui/react";
import { StaggerText } from "./Animation";

const PageTitle = ({ children, centerX, centerY, fullPage, ...rest }) => (
  <Flex
    h={fullPage ? "100vh" : "30vh"}
    mt={fullPage ? 0 : 70}
    minH={200}
    justifyContent="center"
    {...rest}
  >
    <Flex
      h="100%"
      w={centerX ? "unset" : "70%"}
      justifyContent="center"
      alignItems="center"
      minW={60}
      maxW={1600}
    >
      <StaggerText as={Stack} spacing={4} w="100%" pb={centerY ? 0 : "15vh"}>
        {children}
      </StaggerText>
    </Flex>
  </Flex>
);

export default PageTitle;
