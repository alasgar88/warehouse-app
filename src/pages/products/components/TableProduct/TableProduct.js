import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "reactstrap";
import { InfoModal, PaginationComponent } from "../../../../componenets";
import { AiOutlineEye } from "react-icons/ai";
import { shortName } from "../../../../utils/utils";
import DetailProduct from "../detailProduct/DetailProduct";

import {
  deleteProduct,
  getProductList,
} from "../../../../features/product/productSlice";
import { useSelector } from "react-redux";

const TableProduct = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  // for detail info
  const [detailInfo, setDetailInfo] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  // endof for detail info

  const [deleteProductId, setDeleteProductId] = useState("");
  // endof for detail info
  // for paginationComponent
  const { productPaginationList } = useSelector((store) => store.product);
  const [click, setClick] = useState(false);

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
            <th className='action-column'>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => {
            let { name, category, buyPrice, sellPrice, id } = product;
            const newName = shortName(name);
            return (
              <tr key={index}>
                <td>{newName}</td>
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
                  onClick={() => {
                    setDetailInfo(product);
                    setDetailModalOpen(true);
                  }}
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
        storeName='product'
      />
      <DetailProduct
        detailModalOpen={detailModalOpen}
        setDetailModalOpen={setDetailModalOpen}
        data={detailInfo}
      />
    </div>
  );
};

export default TableProduct;
