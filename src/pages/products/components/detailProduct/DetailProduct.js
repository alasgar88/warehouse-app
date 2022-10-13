import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { dateFormater } from "../../../../utils/utils";

const DetailProduct = ({ detailModalOpen, setDetailModalOpen, data }) => {
  const toggle = () => {
    setDetailModalOpen(false);
  };

  const category = data?.category?.split(" ").join(", ");

  const createdDate = dateFormater(data.createdDate, "-");

  return (
    <div className='detail-modal-container'>
      <Modal isOpen={detailModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className='modal-header'>
          <div className='detailInfoHeader'>User Info</div>
        </ModalHeader>
        <ModalBody className='modalbody-text '>
          <div className='detail-info-container'>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Name</div>
              <div className='detail-value-col'>{data.name}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Category</div>
              <div className='detail-value-col'>{category}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Buy price</div>
              <div className='detail-value-col'>{data.buyPrice}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Sell price</div>
              <div className='detail-value-col'>{data.sellPrice}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Create Data</div>
              <div className='detail-value-col'>{createdDate}</div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DetailProduct;
