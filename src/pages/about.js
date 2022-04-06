import { Column, SubHeading } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";

const Wrapper = styled(Column)({
  margin: "40px auto 0",
  rowGap: "40px",
  columnGap: "40px",
  maxWidth: "700px",
});

const ImageContainer = styled.div({
  maxWidth: "500px",
  padding: "0 15px",
});

const Me = styled.img({ width: "100%" });

const ImageText = styled.p({
  color: "var(--text)",
  fontFamily: "var(--Karla)",
  opacity: 0.7,
  marginTop: "5px",
  textAlign: "right",
});

const TextWrapper = styled(Column)({
  alignItems: "flex-start",
  rowGap: "40px",
  margin: "0 auto",
  padding: "0 15px",
});

const Tagline = styled.h1({
  fontSize: "2rem",
  fontFamily: "var(--Sora)",
  fontWeight: "400",
  lineHeight: "1.3em",
  padding: "0 15px",
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
      <SubHeading>About</SubHeading>
      <div>
        <Me src="/img/boat_image.jpeg" />
        <ImageText>Highfields Park</ImageText>
      </div>
      <Tagline>I'm currently a software engineer at Capital One</Tagline>
      <TextWrapper>
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
      <TextWrapper>
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
    </Wrapper>
  </Layout>
);

export default About;
