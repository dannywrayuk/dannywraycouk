import { mode, createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {},
  }),
};

const colors = {
  primary: {
    yellow: "#FFCA1E",
  },
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  config,
  styles,
  colors,
  breakpoints,
});

export default theme;
