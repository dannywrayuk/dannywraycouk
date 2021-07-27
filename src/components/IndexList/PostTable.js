import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  Text,
  Button,
} from "@chakra-ui/react";
import ListItem from "./ListItem";

const PostTable = ({ list, itemIncrease = 10, initialSize = 10 }) => {
  const [shownItems, setShownItems] = useState(
    list.length <= initialSize ? list.length : initialSize
  );
  const filteredList = list
    .filter((_, id) => id < shownItems)
    .map((listItemData) => (
      <ListItem key={listItemData.route} itemData={listItemData} />
    ));
  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th float="right">Date</Th>
        </Tr>
      </Thead>
      <Tbody>{filteredList}</Tbody>
      <TableCaption>
        <Text mb={4}>
          Showing {shownItems} of {list.length}.
        </Text>
        {list.length <= shownItems || (
          <Button
            onClick={() => {
              if (shownItems + itemIncrease <= list.length) {
                setShownItems(shownItems + itemIncrease);
              } else {
                if (shownItems < list.length) {
                  setShown(list.length);
                }
              }
            }}
          >
            See More
          </Button>
        )}
      </TableCaption>
    </Table>
  );
};

export default PostTable;
