import { Heading, Text } from "@style-system";
import { Navigation } from "@components/Navigation";

const StickerSheet = () => {
  return (
    <>
      <Navigation />
      {["Heading", "SubHeading", "SubSubHeading", "Label"].map((variant) => (
        <Heading key={variant} as="h2" variant={variant}>
          {variant}
        </Heading>
      ))}
      <Text color="redTest">i am text</Text>
    </>
  );
};

export default StickerSheet;
