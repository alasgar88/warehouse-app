import React, { useState, useEffect } from "react";
import "./create-user.css";
import { Form, Col, FormGroup, Label, Input, Button, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createUser } from "../../../../features/user/userSlice";
import { getWarehouseList } from "../../../../features/warehouse/warehouseSlice";
import { InfoModal } from "../../../../componenets";

const CreateUser = () => {
  const { warehouseList } = useSelector((store) => store.warehouse);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    passwordHash: "",
    anbarId: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.userName ||
      !userData.email ||
      !userData.passwordHash ||
      !userData.anbarId ||
      !userData.phoneNumber ||
      !userData.address
    ) {
      toast.error("empty values");
      return;
    }

    // sent function ,data,and text to info modal to execute
    setModalOpen(true);
  };

  // set default form valyes
  useEffect(() => {
    setUserData((oldData) => {
      const newData = { ...oldData, anbarId: warehouseList[0]?.id };
      return newData;
    });
  }, [warehouseList]);

  // get warehouse list
  useEffect(() => {
    dispatch(getWarehouseList());
  }, [getWarehouseList]);

  return (
    <div className='create-user-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={createUser}
        data={userData}
        text='Confirm to create user'
      />
      <p className='create-user-heading'>Create User</p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='username'>Username</Label>
              <Input
                id='username'
                name='userName'
                placeholder='enter username'
                type='text'
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                id='email'
                name='email'
                placeholder='enter email'
                type='email'
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            id='password'
            name='passwordHash'
            placeholder='enter password'
            type='password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='anbarId'>Warehouse</Label>
          <Input
            className='mb-3'
            type='select'
            id='anbarId'
            name='anbarId'
            placeholder='warehouse number'
            onChange={handleChange}
          >
            {warehouseList &&
              warehouseList.map((warehouse) => {
                return (
                  <option key={warehouse.id} value={warehouse.id}>
                    {warehouse.name}
                  </option>
                );
              })}
          </Input>
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='phoneNumber'>Phone</Label>
              <Input
                id='phoneNumber'
                name='phoneNumber'
                type='text'
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='address'>Adress</Label>
              <Input id='adress' name='address' onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Button>Create User</Button>
      </Form>
    </div>
  );
};

export default CreateUser;
