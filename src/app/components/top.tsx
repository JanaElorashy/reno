import React, { useState } from "react";
import { Button } from "antd";
import Popup from "./popup";

interface User {
  name: string;
  email: string;
  username: string;
}

export default function Top() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const showModal = () => {
    setOpen(true);
  };

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
      }}
    >
      <h1 style={{ margin: 0 }}>User Management</h1>
      <Button style={{ color: "#fff" }} type="primary" onClick={showModal}>
        + Add New User
      </Button>

      <Popup open={open} setOpen={setOpen} addUser={addUser} />
    </div>
  );
}
