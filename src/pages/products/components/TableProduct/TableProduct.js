import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "reactstrap";
import { InfoModal } from "../../../../componenets";
import { deleteProduct } from "../../../../features/product/productSlice";

const TableProduct = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => {
            const { name, category, buyPrice, sellPrice, id } = product;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{category}</td>
                <td>{buyPrice}</td>
                <td>{sellPrice}</td>
                <td>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableProduct;
