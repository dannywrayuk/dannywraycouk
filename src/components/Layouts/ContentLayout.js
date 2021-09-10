import { Box, Center, Button } from "@chakra-ui/react";
import { Title, SubTitle, Description } from "../Text";
import PageTitle from "../PageTitle";
import { StandardHead } from "../Heads";
import Logo from "../Logo";
import Footer from "../Footer";
import Padding from "../Padding";
import Navigation from "../Navigation";
import ImageCard from "../ImageCard";
import PostList from "../PostList";

export const ContentLayout = ({
  children,
  title,
  subTitle,
  date,
  description,
  animated = false,
  pageTitleHeight = "75vh",
  posts,
}) => (
  <>
    <StandardHead />
    <Box position="fixed" w="100%" p={{ base: 3, md: 10 }}>
      <Logo animated={animated} />
      <Navigation />
    </Box>
    <Footer>
      <Padding>
        <Title my={100}>{title}</Title>
        <ImageCard
          reverse
          image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg"
        >
          <Description>1st Jan 2000</Description>
          <Title>This is a featured post</Title>
          <Description>
            Learning about how i can display the content on the page in such a
            way that the post look nice.
          </Description>
        </ImageCard>
        <SubTitle mb={100}>Latest</SubTitle>
        <PostList mb={100} posts={posts} />
        <Center flexDir="column">
          <Description mb={30}>Still looking for something?</Description>
          <Button mb={30}>See all thoughts</Button>
        </Center>
      </Padding>
    </Footer>
  </>
);
