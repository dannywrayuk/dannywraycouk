import { Heading, SubHeading, SubSubHeading, Text } from "@components/core";

const As =
  (Component, as, _css) =>
  ({ children }) =>
    (
      <Component as={as} _css={_css}>
        {children}
      </Component>
    );

export const h1 = As(Heading);

export const h2 = As(SubHeading, "h2");

export const h3 = As(SubSubHeading, "h3");

export const p = As(Text);

export const ul = As(Text, "ul", {
  listStylePosition: "inside",
  listStyleType: "disc",
});

export const ol = As(Text, "ol", {
  listStylePosition: "inside",
});

export const li = As(Text, "li", {
  paddingLeft: "1.5em",
  margin: "5px 0",
});
