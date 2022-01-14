import { Heading, Text, LinkButton, RoundedImage } from "@components/core";
import { ImageWithText } from "@components/presentation/ImageWithText";

export const About = () => (
  <ImageWithText image={<RoundedImage src="/img/boat_image.jpeg" />} swap>
    <Heading>Hey, I'm Danny.</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel
      metus eget odio euismod viverra vitae nec turpis. Nam non enim diam. Donec
      pharetra rutrum nulla, ut iaculis massa.
    </Text>
    <LinkButton href="/test" variant="primary">
      <Text>Learn more</Text>
    </LinkButton>
  </ImageWithText>
);
