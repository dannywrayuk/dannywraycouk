export const breakpoints = {
  base: "0px",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const toMediaString = (bp) => `@media (min-width: ${bp})`;

export const mq = {
  xs: toMediaString(breakpoints.xs),
  sm: toMediaString(breakpoints.sm),
  md: toMediaString(breakpoints.md),
  lg: toMediaString(breakpoints.lg),
  xl: toMediaString(breakpoints.xl),
};
