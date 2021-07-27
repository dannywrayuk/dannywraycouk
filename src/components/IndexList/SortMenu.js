import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const SortMenu = ({ sortingFunction, setSortingFunction, ...rest }) => (
  <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} {...rest}>
      Sort By: {capitalize(sortingFunction)}
    </MenuButton>
    <MenuList>
      <MenuOptionGroup defaultValue="newest" type="radio">
        <MenuItemOption
          value="newest"
          onClick={() => setSortingFunction("newest")}
        >
          Newest
        </MenuItemOption>
        <MenuItemOption
          value="oldest"
          onClick={() => setSortingFunction("oldest")}
        >
          Oldest
        </MenuItemOption>
        <MenuItemOption
          value="alphabetical"
          onClick={() => setSortingFunction("alphabetical")}
        >
          Alphabetical
        </MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
);

export default SortMenu;
