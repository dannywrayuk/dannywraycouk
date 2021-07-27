import { Td, Tr } from "@chakra-ui/react";
import Link from "../Link";

const ListItem = ({ itemData }) => {
  return (
    <Link
      href={itemData.route}
      as={Tr}
      transition="0.3s"
      _hover={{ color: "gray.400" }}
    >
      <Td>{itemData.title}</Td>
      <Td textAlign="right" fontWeight={300} letterSpacing={2}>
        {itemData.date || "---"}
      </Td>
    </Link>
  );
};

export default ListItem;
