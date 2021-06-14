import styled from "styled-components";
import BlankPage from "../components/BlankPage";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";
import NavigationLinks from "../components/NavigationLinks";
import { getMarkdown } from "../utils";
import Post from "../components/Post";
import Config from "../config";

const {
  Theme: {
    Breakpoints: { OnMediumUp },
  },
} = Config;

const DisplayBreakpoint = styled.div`
  @media ${OnMediumUp} {
    display: flex;
  }
`;

const FullPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionMarker = styled.div`
  color: ${({ theme }) => theme.Colours.PRIMARY1};
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
  @media ${OnMediumUp} {
    margin-top: 100px;
    font-size: 6vw;
  }
`;

const Home = ({ post }) => {
  return (
    <BlankPage showLogo showFooter applyMargin>
      <FullPage>
        <DisplayBreakpoint>
          <Greeting />
          <SocialLinks />
        </DisplayBreakpoint>
        <NavigationLinks />
      </FullPage>
      <Post content={post.content} />
    </BlankPage>
  );
};

export default Home;

export const getStaticProps = async () => {
  const post = getMarkdown("index");
  return {
    props: {
      post,
    },
  };
};
