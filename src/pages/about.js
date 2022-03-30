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
  [md]: {
    minWidth: "400px",
  },
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
  [md]: {
    padding: "20px",
    backgroundColor: "var(--background)",
    transform: "translate(-20px,50px)",
  },
});

const Tagline = styled.div({
  fontSize: "24px",
  fontFamily: "var(--Sora)",
  lineHeight: "32px",
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
      <TextWrapper>
        <Tagline>
          My name is Danny and I'm currently a software engineer at Capital One
        </Tagline>
      </TextWrapper>
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
