import StyledSystem from "@utils/StyledSystem";

/**
 *
 * @param {{potato}} props
 * @returns
 */

export const Text = (props) => (
  <StyledSystem
    as="p"
    baseStyle={{ fontFamily: "Inter", fontSize: "1.125rem" }}
    {...props}
  />
);
