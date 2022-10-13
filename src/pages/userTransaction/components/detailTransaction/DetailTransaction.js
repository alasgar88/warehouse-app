import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./detail-transaction.css";

const DetailTransaction = ({ detailModalOpen, setDetailModalOpen, data }) => {
  const toggle = () => {
    setDetailModalOpen(false);
  };

  const category = data?.kateqoriyasi?.split(" ").join(", ");
  const formatedDate = data?.nevaxt?.slice(0, data.nevaxt.indexOf(":"));

  return (
    <div className='detail-modal-container'>
      <Modal isOpen={detailModalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className='modal-header'>
          <div className='detailInfoHeader'>User Info</div>
        </ModalHeader>
        <ModalBody className='modalbody-text '>
          <div className='detail-info-container'>
            <div className='defail-info-row'>
              <div className='detail-name-col'>State</div>
              <div className='detail-value-col'>
                <span
                  className={`transaction-state ${
                    data.veziyyeti === "Gozlemede" ? "red" : "green"
                  }`}
                >
                  {data.veziyyeti}
                </span>
              </div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Transaction ID</div>
              <div className='detail-value-col'>{data.transactionNo}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Date</div>
              <div className='detail-value-col'>{formatedDate}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Sender</div>
              <div className='detail-value-col'>
                {data.kim === "-" ? "Admin" : data.kim}
              </div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>From</div>
              <div className='detail-value-col'>{data.hardan}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Product</div>
              <div className='detail-value-col'>{data.mehsul}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Count</div>
              <div className='detail-value-col'>{data.miqdar}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Category</div>
              <div className='detail-value-col'>{category}</div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DetailTransaction;
