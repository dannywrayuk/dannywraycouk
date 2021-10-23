import { Flex } from "@chakra-ui/react";
export const PostList = ({ posts }) => {
  let currentYear = 0;
  return (
    <Flex flexDirection="column" gridRowGap="20px">
      {posts.map(({ title, date }) => {
        let day, month, year, showYear;
        if (date) {
          [, day, month, year] = date.match(/(\d\d) (\w\w\w) (\d\d\d\d)/);
          showYear = currentYear < year;
        }
        return (
          <>
            {showYear && <div>{year}</div>}
            <Flex gridColumnGap="30px">
              <div>{date ? `${month} ${day}` : "---"}</div>
              <div>{title}</div>
            </Flex>
          </>
        );
      })}
    </Flex>
  );
};
