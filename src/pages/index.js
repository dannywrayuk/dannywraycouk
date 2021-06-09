import styled from "styled-components";
import BlankPage from "../components/BlankPage";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";
import NavigationLinks from "../components/NavigationLinks";
import PostPreview from "../components/PostPreview";
import { getMetaList } from "../utils";
import Config from "../config";

const {
  Text: { Landing: Text },
  Theme: {
    Breakpoints: { OnMediumUp },
  },
} = Config;

const DisplayBreakpoint = styled.div`
  @media ${OnMediumUp} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const FeaturedPostCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
`;

const SectionMarker = styled.div`
  color: ${({ theme }) => theme.Colours.PRIMARY1};
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
  @media ${OnMediumUp} {
    margin-top: 100px;
    font-size: 40px;
  }
`;

const Home = ({ featuredPostsMeta }) => {
  return (
    <BlankPage showLogo showFooter applyMargin>
      <DisplayBreakpoint>
        <Greeting />
        <SocialLinks />
      </DisplayBreakpoint>
      <NavigationLinks />
      <SectionMarker>{Text.FeaturedSection}</SectionMarker>
      <FeaturedPostCollection>
        {featuredPostsMeta.map((data, id) => (
          <PostPreview key={id} data={data} />
        ))}
      </FeaturedPostCollection>
    </BlankPage>
  );
};

export default Home;

export const getStaticProps = async () => {
  const featuredPostsMeta = getMetaList(
    Config.FeaturedPosts.map((post) => `post/${post}.md`)
  );
  return {
    props: {
      featuredPostsMeta,
    },
  };
};
