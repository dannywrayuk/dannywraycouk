import styled from "styled-components";
import textStore from "../textStore";
import StandardHead from "../components/Heads/standard";
import ShrinkingLogo from "../components/ShrinkingLogo";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";
import NavigationButton from "../components/NavigationButton";
import Post from "../components/Post";
import { getPost } from "../scripts";

const { Landing: Text } = textStore;

const MainContainer = styled.div`
  overflow: auto;
  height: 100vh;
`;

const PostContainer = styled.div`
  margin: 0 15px;
`;

const StyledGreeting = styled(Greeting)`
  margin-top: 30vh;
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin: 100px auto 0 auto;
  width: 70%;
`;

const SectionMarker = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-weight: bold;
  font-size: 18px;
`;

const Home = ({ featuredPost }) => {
  return (
    <StandardHead>
      <ShrinkingLogo />
      <NavigationButton />
      <MainContainer>
        <StyledGreeting />
        <StyledSocialLinks />
      </MainContainer>
      <PostContainer>
        <SectionMarker>{Text.FeaturedPost}</SectionMarker>
        <Post meta={featuredPost.meta} content={featuredPost.content} />
      </PostContainer>
    </StandardHead>
  );
};

export default Home;

export const getStaticProps = async () => {
  const featuredPost = getPost("test");
  return {
    props: {
      featuredPost,
    },
  };
};
