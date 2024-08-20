import React, { useEffect, useState } from "react";
import { Button, Flex, Table, Select } from "antd";
import type { TableColumnsType, TableProps } from "antd";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

export interface DataType {
  key: React.Key;
  name: string;
  username: string;
  email: string;
  group: string;
  status: string;
  createdOn: string;
}

export default function UserTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<DataType[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        const formattedData = data.users.map((user: any, index: number) => ({
          key: index,
          name: user.firstName + " " + user.lastName,
          username: user.username,
          age: user.age,
          email: user.email,
          group: user.company.department,
          status: "Active",
          createdOn: user.birthDate,
        }));
        setUsers(formattedData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  const handleStatusChange = (value: string, key: React.Key) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.key === key ? { ...user, status: value } : user
      )
    );
  };

  const columns: TableColumnsType<DataType> = [
    { title: "Name", dataIndex: "name" },
    { title: "User Name", dataIndex: "username" },
    { title: "Email Address", dataIndex: "email" },
    { title: "Group", dataIndex: "group" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Select
          value={status}
          onChange={(value) => handleStatusChange(value, record.key)}
          options={[
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
            { value: "locked", label: "Locked" },
          ]}
        />
      ),
    },
    { title: "Created On", dataIndex: "createdOn" },
  ];

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedCount(newSelectedRowKeys.length);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        {hasSelected ? `${selectedRowKeys.length} selected` : null}
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={users}
        loading={loading}
      />
    </Flex>
  );
}
