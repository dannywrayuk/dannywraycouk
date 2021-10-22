import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

const Menu = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>menu</ModalContent>
  </Modal>
);
