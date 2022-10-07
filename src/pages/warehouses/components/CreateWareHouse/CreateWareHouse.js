import React, { useState, useEffect } from "react";
import "./create-warehouse.css";
import { Form, Col, FormGroup, Label, Input, Button, Row } from "reactstrap";
import { toast } from "react-toastify";
import { InfoModal } from "../../../../componenets";
import { createWarehouse } from "../../../../features/warehouse/warehouseSlice";

const CreateWareHouse = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [warehouseData, setWarehouseData] = useState({
    Name: "",
    Place: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setWarehouseData((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!warehouseData.Name || !warehouseData.Place) {
      toast.error("empty values");
      return;
    }

    // sent function ,data,and text to info modal to execute
    setModalOpen(true);
  };

  return (
    <div className='create-user-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={createWarehouse}
        data={warehouseData}
        text='Confirm to create warehouse'
      />
      <Form onSubmit={handleSubmit}>
        <Row></Row>
        <FormGroup>
          <Label for='name'>Warehouse name</Label>
          <Input
            id='name'
            name='Name'
            placeholder='Enter warehouse name'
            type='text'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='place'>Place</Label>
          <Input
            id='place'
            name='Place'
            placeholder='Enter warehouse location'
            type='text'
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Create warehouse</Button>
      </Form>
    </div>
  );
};

export default CreateWareHouse;
