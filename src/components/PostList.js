import { Box, Flex } from "@chakra-ui/react";
import Tags from "./Tags";
import { Description, Title } from "./Text";

const SinglePost = ({ data: { title, date, description, tags } }) => (
  <>
    <hr />
    <Flex flexDir="column" justifyContent="space-between" minH={200} px={10}>
      {date && <Description>{date}</Description>}
      {title && <Title fontSize={40}>{title}</Title>}
      {tags && <Tags tags={tags} />}
      {description && <Description>{description}</Description>}
    </Flex>
  </>
);

const PostList = ({ posts, ...rest }) => (
  <Box {...rest}>
    {posts.map((post) => (
      <SinglePost key={post.route} data={post} />
    ))}
    <hr />
  </Box>
);

export default PostList;
