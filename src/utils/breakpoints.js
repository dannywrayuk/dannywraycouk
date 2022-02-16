import { useMediaQuery } from "@utils/useMediaQuery";

const breakpoints = {
  base: 0,
  xs: 320,
  sm: 440,
  md: 700,
  lg: 1000,
  xl: 2000,
};

export default breakpoints;

const toMediaString = (bp) => `@media (min-width: ${bp}px)`;

export const xs = toMediaString(breakpoints.xs);
export const sm = toMediaString(breakpoints.sm);
export const md = toMediaString(breakpoints.md);
export const lg = toMediaString(breakpoints.lg);
export const xl = toMediaString(breakpoints.xl);

export const useBreakpointValue = (values) => {
  const currentBreakpoints = Object.entries(breakpoints).map(
    ([key, value]) => ({
      key,
      status: useMediaQuery(`(min-width: ${value}px)`),
    })
  );
  let dynamicValue = Object.values(values)[0];
  currentBreakpoints.forEach((bp) => {
    if (bp.status && values[bp.key] !== undefined) {
      dynamicValue = values[bp.key];
    }
  });
  return dynamicValue;
};
