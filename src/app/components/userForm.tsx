import React from "react";
import { Button, Form, Input, Select, Space } from "antd";
import type { FormInstance } from "antd/es/form";
import { DataType } from "./userTable";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface UserFormProps {
  form: FormInstance;
  onFinish: (values: {
    name: string;
    username: string;
    email: string;
    group: string;
    createdOn: string;
  }) => void;
}

export default function UserForm({ form, onFinish }: UserFormProps) {
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
        <Input placeholder="Enter Full Name" />
      </Form.Item>
      <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
        <Input placeholder="Enter Username" />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-Mail Address"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter User's Email Address" />
      </Form.Item>
      <Form.Item name="group" label="User Group" rules={[{ required: true }]}>
        <Select placeholder="Choose User Group" allowClear>
          <Option value="office">Office</Option>
          <Option value="managers">Managers</Option>
          <Option value="headOffice">Head Office</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="profile"
        label="Assign Profile"
        rules={[{ required: true }]}
      >
        <Select placeholder="Choose User Profile" allowClear>
          <Option value="profile1">Profile 1</Option>
          <Option value="profile2">Profile 2</Option>
          <Option value="profile3">Profile 3</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
