import { FaUserAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import "./sidebar.css";
import { GrTransaction } from "react-icons/gr";
import { FaWarehouse } from "react-icons/fa";

export const adminMenu = [
  {
    label: "Users",
    icon: <FaUserAlt />,
    path: "/",
    id: 0,
  },
  {
    label: "Products",
    icon: <MdProductionQuantityLimits />,
    path: "/products",
    id: 1,
  },
  { label: "Transactions", icon: <GrTransaction />, path: "/transactions" },
  {
    label: "Warehouses",
    icon: <FaWarehouse />,
    path: "/warehouses",
    id: 2,
  },
];

export const userMenu = [
  {
    label: "Transactions",
    icon: <GrTransaction />,
    path: "/user/transactions",
    id: 10,
  },
];
