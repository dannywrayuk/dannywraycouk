import { Column, Row, Text } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";
import { md, sm } from "@utils/breakpoints";

const Wrapper = styled(Row)({
  margin: "40px auto 0",
  rowGap: "40px",
  columnGap: "40px",
  flexWrap: "wrap",
  maxWidth: "700px",
  [md]: {
    maxWidth: "900px",
  },
});

const ImageContainer = styled.div({
  width: "80%",
  maxWidth: "400px",
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
  margin: "0 auto",
  padding: "0 15px",
  [sm]: {
    padding: "0 30px",
  },
});

const Tagline = styled.h1({
  fontSize: "22px",
  fontFamily: "var(--Sora)",
  fontWeight: "400",
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
      <TextWrapper>
        <Tagline>
          My name is Danny and I'm currently a software engineer at Capital One
        </Tagline>
        <AboutText>
          Maecenas tortor purus, pretium non quam id, ultricies varius tellus.
          Praesent nec urna sapien. Mauris at nulla vitae lorem iaculis laoreet
          id ut lacus.
        </AboutText>
        <AboutText>
          Nulla ac ante nec mi aliquam aliquam. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae;
        </AboutText>
        <AboutText>
          Quisque imperdiet facilisis blandit. Sed faucibus rhoncus elit a
          sagittis. Integer id accumsan justo, a dapibus nisi. Phasellus
          ullamcorper pharetra lectus pulvinar hendrerit. Fusce in risus in
          turpis condimentum semper.
        </AboutText>
        <AboutText>
          Suspendisse luctus venenatis lectus, sed cursus elit venenatis non.
          Fusce elementum erat at viverra rhoncus. Proin iaculis, risus a
          efficitur finibus, nisi augue porta augue, vel consectetur nisl magna
          eget libero. In hac habitasse platea dictumst. Cras ullamcorper orci
          in dignissim pellentesque. Integer euismod sollicitudin odio.
        </AboutText>
        <AboutText>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Maecenas quam ipsum, congue a urna nec,
          egestas lobortis lorem.
        </AboutText>
      </TextWrapper>
      <ImageContainer>
        <Me src="/img/hotdog.jpeg" />
        <ImageText>Me and a hotdog</ImageText>
      </ImageContainer>
    </Wrapper>
  </Layout>
);

export default About;
