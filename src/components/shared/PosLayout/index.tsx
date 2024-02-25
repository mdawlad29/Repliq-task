"use client";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { FC, ReactNode, useState } from "react";
import Sidebar from "../Sidebar";
const { Header, Content } = Layout;

interface ILayout {
  children: ReactNode;
}

const PosLayout: FC<ILayout> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen sof-page-layout">
      <Sidebar collapsed={collapsed} />

      <Layout className="bg-[#edf2f6]">
        <Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              padding: "0 0 !important",
              color: "#fff",
            }}
          />
        </Header>

        <Content className="m-5">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default PosLayout;
