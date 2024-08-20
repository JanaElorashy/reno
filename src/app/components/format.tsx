import React, { useState } from "react";
import { AudioOutlined, SearchOutlined, DownOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  DatePicker,
  Dropdown,
  Input,
  Layout,
  Space,
  theme,
} from "antd";
import type { GetProps } from "antd";
import renoSystemsLogo from "../assets/renoSystemsLogo.png";
import Image from "next/image";
import Sidebar from "./sidebar";
import Sider from "antd/es/layout/Sider";
import type { MenuProps } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Top from "./top";
import UserTable from "./userTable";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Locked",
  },
  {
    key: "2",
    label: "Inactive",
  },
  {
    key: "3",
    label: "Active",
  },
  {
    key: "4",
    label: "Any",
  },
];

const menuProps = {
  items,
};

const onChange = (date: any, dateString: string | string[]) => {
  console.log(date, dateString);
};

export default function Format() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{ backgroundColor: "#050e2d" }}
        width={250}
        collapsible
        collapsed={collapsed}
        collapsedWidth={60}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Sidebar collapsed={collapsed} />
      </Sider>
      <Layout style={{ backgroundColor: "#dcdfe0" }}>
        <Header style={{ padding: 10, margin: 10, backgroundColor: "#dcdfe0" }}>
          <Top />
        </Header>
        <Content style={{ margin: "0 16px", backgroundColor: "#fff" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>
              <Input
                style={{ width: " 300px", margin: "4px" }}
                placeholder="Search..."
                prefix={<SearchOutlined />}
              />

              <Input
                style={{ width: "100px", margin: "4px" }}
                placeholder="Search By..."
              />

              <Dropdown menu={menuProps}>
                <Button style={{ margin: "4px" }}>
                  <Space>
                    User Status
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>

              <Space style={{ margin: "4px" }} direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
              <a href="#" style={{ margin: "4px", color: "#78b2f5" }}>
                All Filters
              </a>
            </div>

            <UserTable />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}></Footer> */}
      </Layout>
    </Layout>
  );
}
