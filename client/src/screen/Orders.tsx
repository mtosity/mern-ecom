import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../Reducers/CombinedReducers";
import DataTable, {
  createTheme,
  IDataTableColumn,
} from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: "productName",
    sortable: true,
    allowOverflow: true,
    wrap: true,
  },
  {
    name: "Order date",
    selector: "createdAt",
    sortable: true,
    allowOverflow: true,
    wrap: true,
  },
  {
    name: "Cost",
    selector: "price",
    sortable: true,
    wrap: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
    wrap: true,
  },
];

export const Orders = () => {
  const userID = useSelector<ApplicationState, string>(
    (state) => state.AccountReducer.id
  );
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`/api/order/${userID}`).then((res) => {
      if (res.status === 200) {
        console.log(res);
        res.json().then((orders) => {
          console.log(orders);
          setOrders(orders);
        });
      } else {
        res.json().then((error) => {
          console.log(error);
        });
      }
    });
  }, [userID]);
  return (
    <div className="p-16">
      <DataTable title="Orders" columns={columns} data={orders} noContextMenu />
    </div>
  );
};
