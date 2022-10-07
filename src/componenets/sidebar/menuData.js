import { FaUserAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import "./sidebar.css";
import { GrTransaction } from "react-icons/gr";
import { FaWarehouse } from "react-icons/fa";

export const menuData = [
  {
    label: "Users",
    icon: <FaUserAlt />,
    path: "/users",
  },
  {
    label: "Products",
    icon: <MdProductionQuantityLimits />,
    path: "/",
  },
  { label: "Transactions", icon: <GrTransaction />, path: "/transactions" },
  {
    label: "Warehouses",
    icon: <FaWarehouse />,
    path: "/warehouses",
  },
];
