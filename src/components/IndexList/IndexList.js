import { useState } from "react";
import SortMenu from "./SortMenu";
import PostTable from "./PostTable";
import { Box } from "@chakra-ui/react";

const sortingFunctions = {
  newest: (a, b) =>
    (b.date ? Date.parse(b.date) : 0) - (a.date ? Date.parse(a.date) : 0),
  oldest: (a, b) =>
    (a.date ? Date.parse(a.date) : 0) - (b.date ? Date.parse(b.date) : 0),
  alphabetical: (a, b) => a.title.localeCompare(b.title),
};

const IndexList = ({ list, itemIncrease, initialSize }) => {
  const [sortingFunction, setSortingFunction] = useState("newest");
  const sortedList = list.sort(sortingFunctions[sortingFunction]);

  return (
    <Box mt={20}>
      <SortMenu
        sortingFunction={sortingFunction}
        setSortingFunction={setSortingFunction}
        mb={4}
      />
      <PostTable
        list={sortedList}
        itemIncrease={itemIncrease}
        initialSize={initialSize}
      />
    </Box>
  );
};

export default IndexList;
