import StyledSystem from "@utils/StyledSystem";

const variants = {
  SubHeading: {
    fontSize: "2.5rem",
  },
  SubSubHeading: {
    fontSize: "1.6rem",
  },
  Label: {
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontWeight: "normal",
    fontSize: "1.25rem",
  },
};

export const Heading = (props) => (
  <StyledSystem
    as="h1"
    variants={variants}
    baseStyle={{
      fontFamily: "Sora",
      fontWeight: "bold",
      letterSpacing: "-0.035em",
      fontSize: "3rem",
      color: "foreground",
    }}
    {...props}
  />
);
