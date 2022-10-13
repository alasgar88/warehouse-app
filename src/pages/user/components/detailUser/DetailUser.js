import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./detail-user.css";

const DetailUser = ({ detailModalOpen, setDetailModalOpen, data }) => {
  const toggle = () => {
    setDetailModalOpen(false);
  };
  console.log(data, "data");
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
              <div className='detail-value-col'>{data.userName}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Status</div>
              <div className='detail-value-col'>
                <span
                  className={`user-state ${
                    data.status === "Active" ? "red" : "green"
                  }`}
                >
                  {data.status ? "Active" : "Deactive"}
                </span>
              </div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Status</div>
              <div className='detail-value-col'>
                {data.status ? "Active" : "Deactive"}
              </div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Email</div>
              <div className='detail-value-col'>{data.email}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Phone</div>
              <div className='detail-value-col'>{data.phoneNumber}</div>
            </div>
            <div className='defail-info-row'>
              <div className='detail-name-col'>Address</div>
              <div className='detail-value-col'>{data.address}</div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DetailUser;
