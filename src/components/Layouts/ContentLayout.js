import { Box, Center, Button, Image } from "@chakra-ui/react";
import { Title, SubTitle, Description } from "../Text";
import { StandardHead } from "../Heads";
import Logo from "../Logo";
import Footer from "../Footer";
import Padding from "../Padding";
import Navigation from "../Navigation";
import { ImageCard, ImageCardText, ImageCardTitle } from "../ImageCard";
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
          image={
            <Image
              maxH={600}
              src="https://image.freepik.com/free-photo/cute-kitten-bed_1303-9321.jpg"
            />
          }
        >
          <ImageCardText>1st Jan 2000</ImageCardText>
          <ImageCardTitle>Test featured post: cat pics</ImageCardTitle>
          <ImageCardText>
            Here you can see a picture of a cat, its very cute. Trying to fill
            this section with some placeholder text . Don't really know what to
            write, really enjoyed the marvel film i saw recently.
          </ImageCardText>
        </ImageCard>
        <SubTitle mb={70}>Latest</SubTitle>
        <PostList mb={100} posts={posts} />
        <Center flexDir="column">
          <Description mb={30}>Still looking for something?</Description>
          <Button mb={30}>See all thoughts</Button>
        </Center>
      </Padding>
    </Footer>
  </>
);
