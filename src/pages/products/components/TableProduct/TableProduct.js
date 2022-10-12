import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "reactstrap";
import { InfoModal, PaginationComponent } from "../../../../componenets";
import { AiOutlineEye } from "react-icons/ai";
import { shortName } from "../../../../utils/utils";

import {
  deleteProduct,
  getProductList,
} from "../../../../features/product/productSlice";
import { useSelector } from "react-redux";

const TableProduct = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");
  // for paginationComponent
  const { productPaginationList } = useSelector((store) => store.product);
  const [click, setClick] = useState(false);

  // get detail
  const handleClickDetail = () => {
    console.log("detail");
  };

  // delete row
  useEffect(() => {
    if (deleteProductId) {
      setModalOpen(true);
    }
    return;
  }, [click]);

  return (
    <div className='table-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={deleteProduct}
        data={deleteProductId}
        text='Confirm to delete warehouse'
      />
      <h3 className='table-title'>Products</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => {
            let { name, category, buyPrice, sellPrice, id } = product;
            name = shortName(name);
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{category}</td>
                <td>{buyPrice}</td>
                <td>{sellPrice}</td>
                <td className='not-last-icon'>
                  <button
                    className='delete-button'
                    onClick={() => {
                      setDeleteProductId(id);
                      // for changing dependency list of useEffect that has to trigger remove action
                      setClick(!click);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                </td>
                <td
                  className='last-icon detail-icon'
                  onClick={handleClickDetail}
                >
                  <AiOutlineEye />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginationComponent
        func={getProductList}
        paginationList={productPaginationList}
      />
    </div>
  );
};

export default TableProduct;
