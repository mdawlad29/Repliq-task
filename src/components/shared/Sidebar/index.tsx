"use client";
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarMenuList } from "./MenuList";

const { Sider } = Layout;

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const routePath = usePathname();
  const { menuItems } = SidebarMenuList();
  const [selectMenu, setSelectMenu] = useState<string | any>("");

  useEffect(() => {
    const pathname = routePath.split("/");

    if (pathname?.length === 3) {
      setSelectMenu(pathname[2]);
      return;
    } else if (pathname?.length === 4) {
      setSelectMenu(pathname[3]);
      return;
    } else {
      setSelectMenu(pathname[1]);
    }
  }, [routePath]);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Link href={"/"}>
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={40}
          height={40}
          priority
          className="my-5 mx-auto"
        />
      </Link>

      <div className="demo-logo-vertical mt-5" />
      <Menu
        selectedKeys={[selectMenu]}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
