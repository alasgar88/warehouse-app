import React, { useState, useEffect } from "react";
import "./make-transaction.css";
import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";
import { toast } from "react-toastify";
import { InfoModal } from "../../../../componenets";
import { createTransaction } from "../../../../features/transaction/transactionSlice";
import { getWarehouseList } from "../../../../features/warehouse/warehouseSlice";
import { getProductList } from "../../../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateTransaction = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { warehouseList } = useSelector((store) => store.warehouse);
  const { productList } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const [transactionData, setTransactionData] = useState({
    // transactionNo: "",
    sender_id: null,
    receiver_id: "",
    productId: "",
    count: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    console.log(name);
    if (name === "sender_id" && !value) {
      console.log("b");
      value = null;
    }
    setTransactionData((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      // !transactionData.transactionNo ||
      !transactionData.receiver_id ||
      !transactionData.productId ||
      !transactionData.count
    ) {
      toast.error("empty values");
      return;
    }

    // sent function ,data,and text to info modal to execute
    setModalOpen(true);
  };

  // set default values
  useEffect(() => {
    setTransactionData((oldData) => {
      const newData = {
        ...oldData,
        receiver_id: warehouseList[0]?.id,
        productId: productList[0]?.id,
      };
      return newData;
    });
  }, [productList, warehouseList]);

  // get warehouse list while loading
  useEffect(() => {
    dispatch(getWarehouseList());
    dispatch(getProductList(1));
  }, [getProductList, getWarehouseList]);

  return (
    <div className='create-user-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={createTransaction}
        data={transactionData}
        text='Confirm to make transaction'
      />
      <Form onSubmit={handleSubmit}>
        {/* <FormGroup>
          <Label for='transactionNo'>Transaction N%</Label>
          <Input
            id='transactionNo'
            name='transactionNo'
            placeholder='enter transaction number'
            type='text'
            onChange={handleChange}
          />
        </FormGroup> */}
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
            <option key={0} value={""}>
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
