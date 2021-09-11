import { Box, Flex } from "@chakra-ui/react";
import Tags from "./Tags";
import { Description, Title } from "./Text";

const SinglePost = ({ data: { title, date, description, tags } }) => (
  <>
    <hr />
    <Flex
      flexDir="column"
      justifyContent="space-between"
      px={{ base: 0, sm: 5, md: 10 }}
      py={5}
    >
      <Box mb={3}>
        {date && <Description>{date}</Description>}
        {tags && <Tags tags={tags} />}
      </Box>
      {title && (
        <Title fontSize={40} mb={3}>
          {title}
        </Title>
      )}
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
