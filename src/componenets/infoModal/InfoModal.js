import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import "./info-modal.css";
import { MdOutlineNotificationImportant } from "react-icons/md";

const InfoModal = ({ modalOpen, setModalOpen, func, data, text }) => {
  //   const { modalOpen } = useSelector((store) => store.infoModal);
  const dispatch = useDispatch();

  const toggle = () => {
    setModalOpen(false);
  };

  const executeFunction = () => {
    dispatch(func(data));
    setModalOpen(false);
  };

  return (
    <div className='info-modal-container'>
      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <MdOutlineNotificationImportant />
        </ModalHeader>
        <ModalBody className='modalbody-text'>{text}</ModalBody>
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
