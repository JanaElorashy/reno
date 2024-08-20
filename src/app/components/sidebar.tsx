import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Layout, Menu } from "antd";
import renoSystemsLogo from "../assets/renoSystemsLogo.png";
import Image from "next/image";

import {
  DashboardOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

function getItem(
  label: React.ReactNode,
  key?: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

type MenuItem = Required<MenuProps>["items"][number];

let items: MenuItem[] = [
  getItem("Dashboard", "1", <DashboardOutlined />),
  getItem("Settings"),
  getItem("ATM Settings", "sub1", <UserOutlined />, [
    getItem("Setting 1", "3"),
    getItem("Setting 2", "4"),
    getItem("Setting 3", "5"),
  ]),
  getItem("Business Setup", "sub2", <UserOutlined />, [
    getItem("Setup 1", "6"),
    getItem("Setup 2", "7"),
    getItem("Setup 3", "8"),
  ]),
  getItem("User Management", "sub3", <TeamOutlined />, [
    getItem("Users", "9"),
    getItem("Profiles", "10"),
    getItem("Groups", "11"),
  ]),
  getItem("License Management", "12", <FileOutlined />),
];

const onSearch = (value: string) => {
  const searchedItem = items.find((item) => {
    if (item != null && "label" in item) {
      return item?.label
        ?.toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    }
  });

  if (searchedItem) {
    const key = searchedItem.key;
    if (searchedItem != null && "label" in searchedItem) {
      console.log(`Item found: ${searchedItem.label} with key ${key}`);
      // Implement the logic to select or navigate to the item
    }
  }

  const settingsItem = items[1];
  if (
    settingsItem &&
    !("children" in settingsItem) &&
    !("type" in settingsItem)
  ) {
    (settingsItem as any).disabled = true;
  }
};

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <>
      <div className="demo-logo-vertical" />

      {!collapsed && (
        <div style={{ padding: "10px" }}>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Image
              src={renoSystemsLogo}
              alt="Reno Systems Logo"
              style={{ maxWidth: "60%", height: "auto" }}
            />
          </div>
          <Search
            placeholder="Quick access"
            onSearch={onSearch}
            style={{ width: "100%" }}
          />
        </div>
      )}

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </>
  );
}
