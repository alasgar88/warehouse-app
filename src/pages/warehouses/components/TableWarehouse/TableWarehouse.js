import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "reactstrap";
import { InfoModal } from "../../../../componenets";
import { deleteWarehouse } from "../../../../features/warehouse/warehouseSlice";

const TableWarehouse = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteWarehouseId, setDeleteWarehouseId] = useState("");
  const [click, setClick] = useState(false);

  // delete row
  useEffect(() => {
    if (deleteWarehouseId) {
      setModalOpen(true);
    }
    return;
  }, [click]);

  return (
    <div className='table-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={deleteWarehouse}
        data={deleteWarehouseId}
        text='Confirm to delete warehouse'
      />
      <h3 className='table-title'>Warehouses</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Place</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((warehouse, index) => {
            const { name, place, id } = warehouse;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{place}</td>
                <td>
                  <button
                    className='delete-button'
                    onClick={() => {
                      setDeleteWarehouseId(id);
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

export default TableWarehouse;
