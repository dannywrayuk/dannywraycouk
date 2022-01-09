const breakpoints = {
  base: 0,
  xs: 320,
  sm: 440,
  md: 768,
  lg: 1340,
  xl: 2000,
};

const getMediaQuery = (bp) => `@media (min-width: ${bp}px)`;

const mediaQuery = breakpoints;
Object.keys(mediaQuery).map((key) => {
  mediaQuery[key] = getMediaQuery(mediaQuery[key]);
});

export const useBreakpoints = (styles) => [
  { [mediaQuery.base]: styles.base },
  { [mediaQuery.xs]: styles.xs },
  { [mediaQuery.sm]: styles.sm },
  { [mediaQuery.md]: styles.md },
  { [mediaQuery.lg]: styles.lg },
  { [mediaQuery.xl]: styles.xl },
];

export const useResponsiveCSSProp = ({ _rcss }) => useBreakpoints(_rcss);
