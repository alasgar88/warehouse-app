import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../features/product/productSlice";
// create product
import CreateProduct from "./components/createProduct/CreateProduct";
//  endof create product
import TableProduct from "./components/TableProduct/TableProduct";
// import { InfoModal } from "../../componenets";
import "./product.css";

const WareHouses = () => {
  const { productList, productDelete } = useSelector((store) => store.product);
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [deleteWarehouseId, setDeleteWarehouseId] = useState(null);
  const dispatch = useDispatch();

  // delete warehouse
  // const deleteRow = (id) => {
  //   console.log(id, "id");
  //   setDeleteWarehouseId(id);
  //   setModalOpen(true);
  // };

  // close Product  after navigation
  useEffect(() => {
    setShowCreateProduct(false);
    dispatch(getProductList());
  }, [productDelete]);

  // show create product with button click
  const handleClick = () => {
    setShowCreateProduct(!showCreateProduct);
  };

  // close CreateProduct component after user Created
  useEffect(() => {
    setShowCreateProduct(false);
  }, [productList]);

  return (
    <div className='table-container'>
      {/* <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={deleteWarehouse}
        data={deleteWarehouseId}
        text='Confirm to delete warehouse'
      /> */}
      <div className='button-container'>
        <button className='category-button' onClick={handleClick}>
          {showCreateProduct ? "Product List" : "Create product"}
        </button>
      </div>
      {showCreateProduct ? (
        <CreateProduct setShowCreateProduct={setShowCreateProduct} />
      ) : (
        // <TableProduct data={warehouseList} func={deleteRow} />
        <TableProduct data={productList} />
      )}
    </div>
  );
};

export default WareHouses;
