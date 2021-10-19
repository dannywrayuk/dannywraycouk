import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "styled-components";
import Footer from "../Footer";
import { NavigationBar } from "../NavigationBar";

const CenterGrid = styled(Box)`
  display: grid;
  column-gap: 20px;
  row-gap: 100px;
  grid-template-rows: none;
  grid-auto-flow: row;
  grid-template-columns: 1fr minmax(auto, 880px) 1fr;
  > * {
    grid-column: 2;
  }
`;

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
      <Menu isOpen={isOpen} onClose={onClose} />
      <Footer>
        <CenterGrid>
          <NavigationBar menuOpen={onOpen} />
          {children}
        </CenterGrid>
      </Footer>
    </>
  );
};
