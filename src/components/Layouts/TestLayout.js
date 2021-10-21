import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { Footer } from "../Content/Footer";
import { StandardHead } from "../Heads";
import { Navigation } from "../Navigation";

const CenterGrid = (props) => (
  <Flex
    direction="column"
    maxW="920px"
    gridRowGap="100px"
    px="20px"
    mx="auto"
    {...props}
  />
);

const Menu = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>menu</ModalContent>
  </Modal>
);

export const TestLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <StandardHead />
      <Menu isOpen={isOpen} onClose={onClose} />
      <Navigation menuOpen={onOpen} />
      <CenterGrid>
        {children}
        <Footer />
      </CenterGrid>
    </>
  );
};
