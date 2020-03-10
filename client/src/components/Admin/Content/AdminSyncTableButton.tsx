import React, { useState } from "react";
import { AdminButton } from "./AdminButton";

interface props {
  tableName: string;
}

export const AdminSyncTableButton = ({ tableName }: props) => {
  const [msg, setMsg] = useState("");
  const syncTable = async () => {
    const res = await fetch(`/api/${tableName}/sync`);
    const { msg } = await res.json();
    setMsg(msg);
  };
  const btnTitle = "Sync " + tableName + " table";
  return (
    <div>
      <AdminButton title={btnTitle} onClick={() => syncTable()} />
      <p className="text-green-400 mt-2">{msg}</p>
    </div>
  );
};
