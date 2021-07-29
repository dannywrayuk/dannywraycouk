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
import Package from "../../package.json";
import { Menu as MenuContent } from "./Content/Menu";
import SubTitle from "./Text/SubTitle";

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
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex alignItems="center" mt={10}>
            <SubTitle fontSize={18} textAlign="center" flexGrow={1}>
              dannywray.co.uk
            </SubTitle>
            {showCloseButton && <DrawerCloseButton />}
          </Flex>
          <DrawerBody>{children || <MenuContent />}</DrawerBody>
          <DrawerFooter>
            <SubTitle
              fontWeight={200}
              letterSpacing={2}
              textTransform="uppercase"
            >
              {`v${Package.version}`}
            </SubTitle>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
