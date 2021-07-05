import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Package from "../../package.json";
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
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";

export const MenuDraw = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const drawerSize = useBreakpointValue({ base: "full", sm: "xs" });
  const showCloseButton = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <IconButton
        position="fixed"
        top={{ base: 3, md: 10 }}
        right={{ base: 3, md: 10 }}
        icon={<HamburgerIcon w={6} h={6} />}
        ref={btnRef}
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
          <Flex alignItems="center" p={{ base: 3, md: 10 }}>
            <Heading
              fontSize={18}
              fontWeight={200}
              letterSpacing={2}
              textTransform="uppercase"
              textAlign="center"
              flexGrow={1}
            >
              dannywray.co.uk
            </Heading>
            {showCloseButton && <DrawerCloseButton />}
          </Flex>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>
            <Text fontWeight={200} letterSpacing={2} textTransform="uppercase">
              {`v${Package.version}`}
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const MenuDrawContent = () => <div>hello</div>;
