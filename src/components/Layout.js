import { Box } from "@style-system";

export const Layout = ({ children }) => (
  <>
    <Box maxW={1296} mx="auto">
      {children}
    </Box>
    <Box h="50px" w="50vw" bg="red" />
  </>
);
