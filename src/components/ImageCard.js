import { Flex, Box, Stack, Image, useBreakpointValue } from "@chakra-ui/react";

const ImageCard = ({ children, image, reverse }) => {
  const responsiveReverse = useBreakpointValue({ base: false, lg: reverse });

  const ImageHalf = (props) => (
    <Box w="100%" overflow="hidden" borderRadius={30} {...props}>
      <Image src={image} w="100%" />
    </Box>
  );

  const TextHalf = (props) => (
    <Stack w="100%" spacing={10} {...props}>
      {children}
    </Stack>
  );

  const Section = (props) => (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100%"
      w={{
        base: "100%",
        lg: "40%",
      }}
      {...props}
    >
      {props.children}
    </Flex>
  );

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      mb={140}
    >
      <Section mb={{ base: "10%", lg: 0 }}>
        {!responsiveReverse ? <ImageHalf /> : <TextHalf />}
      </Section>
      <Section>{responsiveReverse ? <ImageHalf /> : <TextHalf />}</Section>
    </Flex>
  );
};

export default ImageCard;
