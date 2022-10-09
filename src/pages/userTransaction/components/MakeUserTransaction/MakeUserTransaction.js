import React, { useState, useEffect } from "react";
import "./make-user-transaction.css";
import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";
import { toast } from "react-toastify";
import { InfoModal } from "../../../../componenets";
import { createUserTransaction } from "../../../../features/userTransaction/userTransactionSlice";
import { getWarehouseList } from "../../../../features/warehouse/warehouseSlice";
import { getProductList } from "../../../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateTransaction = () => {
  //     {
  //   "transactionNo": "string",
  //   "sender_id": 0,  sender_id true (gonderirem) false (qebul edirem)
  //   "receiver_id": 0,  qarsi  anbarimin idisin/ bosh deyer laraq qalsin
  //   "productId": 0,
  //   "count": 0

  // }
  const [modalOpen, setModalOpen] = useState(false);
  const { warehouseList } = useSelector((store) => store.warehouse);
  const { productList } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  console.log(warehouseList.length, "len");
  const [userTransactionData, setUserTransactionData] = useState({
    transactionNo: "",
    sender_id: "",
    receiver_id: "",
    productId: "",
    count: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserTransactionData((oldValue) => {
      return { ...oldValue, [name]: value };
    });
    console.log(userTransactionData, "userTransactionData");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userTransactionData.transactionNo ||
      !userTransactionData.receiver_id ||
      !userTransactionData.productId ||
      !userTransactionData.count
    ) {
      toast.error("empty values");
      return;
    }

    // sent function ,data,and text to info modal to execute
    setModalOpen(true);
  };

  // get warehouse list while loading
  useEffect(() => {
    dispatch(getWarehouseList());
    dispatch(getProductList());
  }, [getProductList, getWarehouseList]);

  return (
    <div className='create-user-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={createUserTransaction}
        data={userTransactionData}
        text='Confirm to make transaction'
      />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='transactionNo'>Transaction N%</Label>
          <Input
            id='transactionNo'
            name='transactionNo'
            placeholder='enter transaction number'
            type='text'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='sender_id'>Sender</Label>
          <Input
            className='mb-3'
            type='select'
            id='sender_id'
            name='sender_id'
            placeholder='select sender'
            onChange={handleChange}
          >
            <option key={0} value={null}>
              Import
            </option>
            {warehouseList &&
              warehouseList.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='receiver_id'>Receiver</Label>
          <Input
            className='mb-3'
            type='select'
            id='receiver_id'
            name='receiver_id'
            placeholder='select '
            onChange={handleChange}
          >
            <option key={0} value={null}></option>
            {warehouseList &&
              warehouseList.map((item, index) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='productId'>Product</Label>
          <Input
            className='mb-3'
            type='select'
            id='productId'
            name='productId'
            placeholder='select product'
            onChange={handleChange}
          >
            <option key={0} value={null}></option>
            {productList &&
              productList.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='count'>Product count</Label>
          <Input
            id='count'
            name='count'
            placeholder='enter product count'
            type='text'
            onChange={handleChange}
          />
        </FormGroup>

        <Button>Create warehouse</Button>
      </Form>
    </div>
  );
};

export default CreateTransaction;
