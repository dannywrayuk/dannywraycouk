export const bp = {
  base: 0,
  sm: 30,
  md: 48,
  lg: 62,
  xl: 80,
  "2xl": 96,
};

const toMediaString = (x) => `@media (min-width: ${x}em)`;

export const mq = {
  xs: toMediaString(bp.xs),
  sm: toMediaString(bp.sm),
  md: toMediaString(bp.md),
  lg: toMediaString(bp.lg),
  xl: toMediaString(bp.xl),
};
