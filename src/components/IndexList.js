import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "./Link";
import { useState } from "react";

const ListItem = ({ itemData }) => (
  <Link
    href={itemData.route}
    as={Tr}
    transition="0.3s"
    _hover={{ color: "gray.400" }}
  >
    <Td>{itemData.title}</Td>
    <Td textAlign="right" fontWeight={300} letterSpacing={2}>
      {itemData.date}
    </Td>
  </Link>
);

const IndexList = ({ list, itemIncrease = 10, initialSize = 10 }) => {
  const [shownItems, setShownItems] = useState(
    list.length <= initialSize ? list.length : initialSize
  );
  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th float="right">Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {list
          .filter((_, id) => id < shownItems)
          .map((listItemData) => (
            <ListItem key={listItemData.route} itemData={listItemData} />
          ))}
      </Tbody>
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

export default IndexList;
