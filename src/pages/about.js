import { Flex, Heading, Text } from "@components/core";
import { Layout } from "@components/Layout";
import { MetaTags } from "@components/Head";
import styled from "@emotion/styled";

const ImageContainer = styled.div({
  maxWidth: "500px",
  padding: "0 15px",
  margin: "0 auto",
});

const Image = styled.img({ width: "100%" });

const ImageText = styled.p({
  color: "var(--color-fg-subtle)",
  fontFamily: "var(--Karla)",
  marginTop: "5px",
  textAlign: "right",
});

const meta = {
  title: "About",
  abstract: "A little about me.",
  route: "/about",
};

const About = () => (
  <Layout>
    <MetaTags meta={meta} />
    <div>
      <Image src="/img/boat_image.jpeg" />
      <ImageText>Highfields Park</ImageText>
    </div>
    <Heading size="4xl" weight="400">
      I'm currently a software engineer at Capital One
    </Heading>
    <Text>But before we get to that, let's talk about how I got there..</Text>
    <Flex column rg="20px">
      <Text>
        Maecenas tortor purus, pretium non quam id, ultricies varius tellus.
        Praesent nec urna sapien. Mauris at nulla vitae lorem iaculis laoreet id
        ut lacus.
      </Text>
      <Text>
        Nulla ac ante nec mi aliquam aliquam. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </Text>
      <Text>
        Quisque imperdiet facilisis blandit. Sed faucibus rhoncus elit a
        sagittis. Integer id accumsan justo, a dapibus nisi. Phasellus
        ullamcorper pharetra lectus pulvinar hendrerit. Fusce in risus in turpis
        condimentum semper.
      </Text>
      <Text>
        Suspendisse luctus venenatis lectus, sed cursus elit venenatis non.
        Fusce elementum erat at viverra rhoncus. Proin iaculis, risus a
        efficitur finibus, nisi augue porta augue, vel consectetur nisl magna
        eget libero. In hac habitasse platea dictumst. Cras ullamcorper orci in
        dignissim pellentesque. Integer euismod sollicitudin odio.
      </Text>
      <Text>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Maecenas quam ipsum, congue a urna nec, egestas lobortis
        lorem.
      </Text>
    </Flex>
    <ImageContainer>
      <Image src="/img/hotdog.jpeg" />
      <ImageText>Me and a hotdog</ImageText>
    </ImageContainer>
    <Flex column rg="20px">
      <Text>
        Maecenas tortor purus, pretium non quam id, ultricies varius tellus.
        Praesent nec urna sapien. Mauris at nulla vitae lorem iaculis laoreet id
        ut lacus.
      </Text>
      <Text>
        Nulla ac ante nec mi aliquam aliquam. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </Text>
      <Text>
        Quisque imperdiet facilisis blandit. Sed faucibus rhoncus elit a
        sagittis. Integer id accumsan justo, a dapibus nisi. Phasellus
        ullamcorper pharetra lectus pulvinar hendrerit. Fusce in risus in turpis
        condimentum semper.
      </Text>
      <Text>
        Suspendisse luctus venenatis lectus, sed cursus elit venenatis non.
        Fusce elementum erat at viverra rhoncus. Proin iaculis, risus a
        efficitur finibus, nisi augue porta augue, vel consectetur nisl magna
        eget libero. In hac habitasse platea dictumst. Cras ullamcorper orci in
        dignissim pellentesque. Integer euismod sollicitudin odio.
      </Text>
      <Text>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Maecenas quam ipsum, congue a urna nec, egestas lobortis
        lorem.
      </Text>
    </Flex>
  </Layout>
);

export default About;
