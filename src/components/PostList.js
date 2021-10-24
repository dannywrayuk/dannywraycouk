import { Box, Flex } from "@chakra-ui/react";
import { SubTitle } from "./Text";

export const PostList = ({ posts }) => {
  let currentYear = 0;
  return (
    <Flex flexDirection="column" gridRowGap="5px">
      {posts
        .sort(
          (a, b) =>
            (b.date ? Date.parse(b.date) : 0) -
            (a.date ? Date.parse(a.date) : 0)
        )
        .map(({ title, date }) => {
          let day, month, year, showYear;
          if (date) {
            [, day, month, year] = date.match(/(\d\d) (\w\w\w) (\d\d\d\d)/);
            showYear = currentYear < year;
          }
          return (
            <>
              {showYear && <SubTitle py="20px">{year}</SubTitle>}
              <Flex gridColumnGap="20px" h="100px" alignItems="center">
                <Box minW="60px">{date ? `${month} ${day}` : "-"}</Box>
                <Box>{title}</Box>
              </Flex>
            </>
          );
        })}
    </Flex>
  );
};
