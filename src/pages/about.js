import { Column, Text } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";
import { md } from "@utils/breakpoints";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "40px auto 0",
  rowGap: "40px",
  [md]: {
    flexDirection: "row",
  },
});

const ImageContainer = styled.div({
  width: "80%",
});

const Me = styled.img({ width: "100%" });

const ImageText = styled.p({
  color: "var(--text)",
  fontFamily: "var(--Karla)",
  opacity: 0.7,
  marginTop: "5px",
});

const TextWrapper = styled(Column)({
  alignItems: "flex-start",
  rowGap: "40px",
  padding: "0 20px",
  maxWidth: "700px",
  margin: "0 auto",
});

const TaglineOffset = styled.div({
  alignItems: "flex-start",
  rowGap: "40px",
  padding: "0 20px",
  [md]: {
    maxWidth: "300px",
    padding: "20px",
    backgroundColor: "var(--text)",
    transform: "translate(-30px,70px)",
  },
});

const Tagline = styled.h1({
  fontSize: "24px",
  fontFamily: "var(--Sora)",
  fontWeight: "400",
  lineHeight: "32px",
  [md]: {
    color: "var(--background)",
  },
});

const AboutText = styled.p({
  color: "var(--text)",
  fontFamily: "var(--Karla)",
  fontSize: "18px",
  lineHeight: "30px",
});

const About = () => (
  <Layout>
    <Wrapper>
      <ImageContainer>
        <Me src="/img/me.jpeg" />
        <ImageText>Me doing something</ImageText>
      </ImageContainer>
      <TaglineOffset>
        <Tagline>
          My name is Danny and I'm currently a software engineer at Capital One
        </Tagline>
      </TaglineOffset>
    </Wrapper>
    <TextWrapper>
      <AboutText>
        Maecenas tortor purus, pretium non quam id, ultricies varius tellus.
        Praesent nec urna sapien. Mauris at nulla vitae lorem iaculis laoreet id
        ut lacus.
      </AboutText>
      <AboutText>
        Nulla ac ante nec mi aliquam aliquam. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae;
      </AboutText>
      <AboutText>
        Quisque imperdiet facilisis blandit. Sed faucibus rhoncus elit a
        sagittis. Integer id accumsan justo, a dapibus nisi. Phasellus
        ullamcorper pharetra lectus pulvinar hendrerit. Fusce in risus in turpis
        condimentum semper.
      </AboutText>
      <AboutText>
        Suspendisse luctus venenatis lectus, sed cursus elit venenatis non.
        Fusce elementum erat at viverra rhoncus. Proin iaculis, risus a
        efficitur finibus, nisi augue porta augue, vel consectetur nisl magna
        eget libero. In hac habitasse platea dictumst. Cras ullamcorper orci in
        dignissim pellentesque. Integer euismod sollicitudin odio.
      </AboutText>
      <AboutText>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Maecenas quam ipsum, congue a urna nec, egestas lobortis
        lorem.
      </AboutText>
    </TextWrapper>
  </Layout>
);

export default About;
