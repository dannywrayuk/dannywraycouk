export const boxProps = ({
  m,
  mt,
  ml,
  mb,
  mr,
  mx,
  my,
  p,
  pt,
  pl,
  pb,
  pr,
  px,
  py,
  w,
  h,
}) => ({
  margin: m,
  marginTop: mt || my,
  marginRight: mr || mx,
  marginBottom: mb || my,
  marginLeft: ml || mx,
  padding: p,
  paddingTop: pt || py,
  paddingRight: pr || px,
  paddingBottom: pb || py,
  paddingLeft: pl || px,
  width: w,
  height: h,
});

export const flexProps = ({
  dir,
  jc,
  ai,
  cg,
  rg,
  flexWrap,
  column,
  center,
}) => ({
  flexDirection: column ? "column" : dir,
  justifyContent: jc || (center && "center"),
  alignItems: ai || (center && "center"),
  columnGap: cg,
  rowGap: rg,
  flexWrap: flexWrap === "reverse" ? "wrap-reverse" : flexWrap && "wrap",
});

export const textProps = ({
  color,
  size,
  fontSize,
  weight,
  inline,
  center,
  align,
}) => ({
  color,
  fontSize: fontSize || (size && `var(--fs-${size})`),
  fontWeight: weight,
  display: inline && "inline",
  textAlign: align || (center && "center"),
});

export const iconProps = ({ size = 22 }) => ({
  width: size,
  height: size,
});
