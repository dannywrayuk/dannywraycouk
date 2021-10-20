import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from "../Footer";
import { StandardHead } from "../Heads";
import { Navigation } from "../Navigation";

const CenterGrid = (props) => (
  <Box
    display="grid"
    gridColumnGap="20px"
    gridRowGap="100px"
    gridTemplateRows="none"
    gridAutoFlow="row"
    gridTemplateColumns="1fr minmax(auto, 880px) 1fr"
    css=" > * {grid-column: 2;  }"
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
      <Footer>
        <Navigation menuOpen={onOpen} />
        <CenterGrid>{children}</CenterGrid>
      </Footer>
    </>
  );
};
