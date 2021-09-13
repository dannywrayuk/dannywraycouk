import { Flex } from "@chakra-ui/react";
import React from "react";
import { Description, Title } from "./Text";

const Side = ({ children }) => (
  <Flex
    direction="column"
    justifyContent="center"
    px={{ base: 0, lg: 5 }}
    minW={{ base: 0, lg: "480px" }}
    maxW={{ base: "100%", lg: "50%" }}
    mb={10}
  >
    {children}
  </Flex>
);

export const SplitCard = ({ children, reverse, ...rest }) => {
  if (React.Children.count(children) !== 2) {
    console.log("hey");
    throw new Error("Expected two children only.");
  }
  const [first, second] = children;
  return (
    <Flex
      direction={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      mb={40}
      {...rest}
    >
      <Side>{first}</Side>
      <Side>{second}</Side>
    </Flex>
  );
};

export const SplitCardTitle = (props) => (
  <Title fontSize={40} mb={5} {...props} />
);

export const SplitCardText = (props) => <Description mb={3} {...props} />;
