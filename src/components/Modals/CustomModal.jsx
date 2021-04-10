import React from 'react';
import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const CustomModal = ({ isOpen, toggle, label, children }) => (
  <Modal keyboard isOpen={isOpen} toggle={toggle} centered>
    <Header toggle={toggle}>
      <span style={{ fontSize: '1.25rem' }}>{label}</span>
    </Header>
    <ModalBody>{children}</ModalBody>
  </Modal>
);

export default CustomModal;

const Header = styled(ModalHeader)`
  position: relative;
  justify-content: center;
  button {
    right: 1.5rem;
    position: absolute;
  }
`;
