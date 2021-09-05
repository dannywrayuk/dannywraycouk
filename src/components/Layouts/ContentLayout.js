import { Menu } from "../Content/Menu";
import { Box } from "@chakra-ui/layout";

export const ContentLayout = ({ children }) => (
  <>
    <Box
      minW={{ base: "16rem", lg: "20rem" }}
      position="fixed"
      h="100%"
      pt={10}
    >
      <Menu />
    </Box>
    <Box pl={{ base: "16rem", lg: "20rem" }}>
      <Box px="2rem" py={{ base: "2rem", lg: "2.5rem" }} m="0 auto" maxW={820}>
        {children}
      </Box>
    </Box>
  </>
);
