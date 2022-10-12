import React, { useEffect, useState } from "react";
import "./warehouse-detail.css";
import { getWarehouseDetail } from "../../../../features/warehouse/warehouseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import TableUser from "../../../user/components/TableUser/TableUser";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function Example(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
}

// Resolves charts dependancy
charts(FusionCharts);

const WarehouseDetail = () => {
  const [open, setOpen] = useState("1");
  const dispatch = useDispatch();
  const { warehouseDetail } = useSelector((store) => store.warehouse);
  const { userStatus, userPasswordChanged } = useSelector(
    (store) => store.user
  );
  const { id } = useParams();

  const productData = warehouseDetail?.products?.map((product) => {
    return { label: product?.name, value: product?.miqdar };
  });
  const dataSource = {
    chart: {
      caption: "Warehouse product",
      //   subcaption: "For the year 2017",
      yaxisname: "Product count",
      decimals: "1",
      theme: "fusion",
    },
    data: productData,
  };

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    dispatch(getWarehouseDetail(id));
  }, [id, userStatus, userPasswordChanged]);

  return (
    <>
      <div className='fusion-chart-container'>
        <ReactFusioncharts
          type='column3d'
          width='50%'
          height='70%'
          dataFormat='JSON'
          dataSource={dataSource}
        />
      </div>
      <div className='accordion-container'>
        <Accordion open={open} toggle={toggle} className='accordion-menu'>
          <AccordionItem>
            <AccordionHeader targetId='1'>Users</AccordionHeader>
            <AccordionBody accordionId='1'>
              <div className='user-table'>
                <TableUser data={warehouseDetail.users} />
              </div>
            </AccordionBody>
          </AccordionItem>
          {/* <AccordionItem>
            <AccordionHeader targetId='2'>Transaction</AccordionHeader>
            <AccordionBody accordionId='2'>
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem> */}
        </Accordion>
      </div>
    </>
  );
};

export default WarehouseDetail;
