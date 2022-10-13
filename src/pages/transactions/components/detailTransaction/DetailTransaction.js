import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const DetailTransaction = ({ detailModalOpen, setDetailModalOpen, data }) => {
  const toggle = () => {
    setDetailModalOpen(false);
  };

  return (
    <div className='detail-modal-container'>
      <Modal isOpen={detailModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className='modal-header'>
          <div className='detailInfoHeader'>User Info</div>
        </ModalHeader>
        <ModalBody className='modalbody-text '>
          <div className='detail-info-container'>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Sender</div>
              <div className='detail-value-col'>
                {data.sender ? data.sender : "Import"}
              </div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Receiver</div>
              <div className='detail-value-col'>{data.receiver}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Product</div>
              <div className='detail-value-col'>{data.mehsul}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Count</div>
              <div className='detail-value-col'>{data.miqdar}</div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DetailTransaction;
