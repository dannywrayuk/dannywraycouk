import { useBreakpointValue } from "@chakra-ui/react";
import Menu from "../Menu";
import NavigationBar from "./NavigationBar";

const Navigation = () => {
  const useHamburger = useBreakpointValue({ base: true, md: false });
  return useHamburger ? <Menu /> : <NavigationBar />;
};

export default Navigation;
