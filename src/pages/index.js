import styled from "styled-components";
import StandardHead from "../components/Heads/standard";
import ShrinkingLogo from "../components/ShrinkingLogo";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";

const MainContainer = styled.div`
  overflow: auto;
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin: 100px auto 0 auto;
  width: 70%;
`;

const Home = () => {
  return (
    <StandardHead>
      <ShrinkingLogo />
      <MainContainer>
        <Greeting />
        <StyledSocialLinks />
      </MainContainer>
    </StandardHead>
  );
};

export default Home;
