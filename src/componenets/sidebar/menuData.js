import { FaUserAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import "./sidebar.css";
import { GrTransaction } from "react-icons/gr";
import { FaWarehouse } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const adminMenu = [
  {
    label: "Users",
    icon: <FaUserAlt />,
    path: "/user",
    id: 0,
  },
  {
    label: "Products",
    icon: <MdProductionQuantityLimits />,
    path: "/products",
    id: 1,
  },
  {
    label: "Transactions",
    icon: <BsFillArrowRightCircleFill />,
    path: "/transactions",
  },
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
    icon: <BsFillArrowRightCircleFill />,
    path: "/user/transactions",
    id: 10,
  },
];
