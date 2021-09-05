import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Menu as MenuContent } from "./Content/Menu";
import { SubTitle } from "./Text";
import Link from "./Link";

const StyledLink = ({ href, children }) => (
  <Link
    href={href}
    as={Text}
    transition="0.3s"
    _hover={{ color: "gray.400" }}
    _focus={{ borderBox: "none" }}
  >
    {children}
  </Link>
);

const Menu = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const drawerSize = useBreakpointValue({ base: "full", sm: "xs" });
  const showCloseButton = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <IconButton
        position="fixed"
        top={{ base: 3, md: 10 }}
        right={{ base: 3, md: 10 }}
        icon={<HamburgerIcon w={6} h={6} />}
        variant="unstyled"
        borderRadius={10}
        onClick={onOpen}
        _focus={{ boxShadow: "none" }}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        size={drawerSize}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex alignItems="center" mt={10}>
            {showCloseButton && <DrawerCloseButton />}
          </Flex>
          <DrawerBody>{children || <MenuContent />}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
