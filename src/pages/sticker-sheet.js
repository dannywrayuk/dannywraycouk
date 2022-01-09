import { Layout } from "@components/Layout";
import { Navigation } from "@components/Navigation";
import {
  Heading,
  Label,
  SubHeading,
  SubSubHeading,
  Text,
} from "@components/core";

const StickerSheet = () => {
  return (
    <Layout>
      <Navigation />
      <Heading>Heading</Heading>
      <SubHeading>SubHeading</SubHeading>
      <SubSubHeading>SubSubHeading</SubSubHeading>
      <Label>Label</Label>
      <Text>i am text</Text>
    </Layout>
  );
};

export default StickerSheet;
