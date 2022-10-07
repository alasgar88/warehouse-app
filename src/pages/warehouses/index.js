import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWarehouseList } from "../../features/warehouse/warehouseSlice";
import CreateWareHouse from "./components/CreateWareHouse/CreateWareHouse";
import TableWarehouse from "./components/TableWarehouse/TableWarehouse";

// import "./create-warehouse.css";

const WareHouses = () => {
  const { warehouseList, warehouseDelete } = useSelector(
    (store) => store.warehouse
  );
  const [showCreateWarehouse, setShowCreateWarehouse] = useState(false);

  const dispatch = useDispatch();
  // close Warehouse  after navigation
  useEffect(() => {
    setShowCreateWarehouse(false);
    dispatch(getWarehouseList());
  }, [warehouseDelete]);

  // show create warehouse with button click
  const handleClick = () => {
    setShowCreateWarehouse(!showCreateWarehouse);
  };

  // close CreateWarehouse component after user Created
  useEffect(() => {
    setShowCreateWarehouse(false);
  }, [warehouseList]);

  return (
    <div className='table-container'>
      <div className='button-container'>
        <button className='category-button' onClick={handleClick}>
          {showCreateWarehouse ? "Warehouse List" : "Create warehouse"}
        </button>
      </div>
      {showCreateWarehouse ? (
        <CreateWareHouse />
      ) : (
        <TableWarehouse data={warehouseList} />
      )}
    </div>
  );
};

export default WareHouses;
