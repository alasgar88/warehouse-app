import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./info-modal.css";

const InfoModal = ({ modalOpen, setModalOpen, func, data, text }) => {
  //   const { modalOpen } = useSelector((store) => store.infoModal);
  const dispatch = useDispatch();

  const toggle = () => {
    setModalOpen(false);
  };

  const executeFunction = () => {
    console.log(data, "data");
    dispatch(func(data));
    setModalOpen(false);
  };

  return (
    <div className='info-modal-container'>
      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>{text}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={executeFunction}>
            Confirm
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default InfoModal;
