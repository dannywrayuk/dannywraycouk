import { Box } from "@chakra-ui/react";
import { StandardHead } from "../Heads";
import Logo from "../Logo";
import Footer from "../Footer";
import Padding from "../Padding";
import Navigation from "../Navigation";

export const BasicLayout = ({ children, animated = false }) => (
  <>
    <StandardHead />
    <Box position="fixed" w="100%" top={0} p={{ base: 3, md: 10 }}>
      <Navigation />
    </Box>
    <Footer>
      <Padding>
        <Box mb={10}>{children}</Box>
      </Padding>
    </Footer>
  </>
);
