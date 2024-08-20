import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import UserForm from "./userForm";

interface PopupProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addUser: (user: { name: string; email: string; username: string }) => void;
}

export default function Popup({ open, setOpen, addUser }: PopupProps) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      setTimeout(() => {
        addUser(values);
        setLoading(false);
        setOpen(false);
        form.resetFields();
      }, 1000);
    });
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      open={open}
      title="Add New User"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <UserForm form={form} onFinish={handleOk} />{" "}
    </Modal>
  );
}
