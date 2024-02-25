import { VideoCameraOutlined } from "@ant-design/icons";
import { type MenuProps } from "antd";
import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const SidebarMenuList = () => {
  return {
    menuItems: [
      getItem(
        <Link href="/pos/dashboard">Dashboard</Link>,
        "dashboard",
        <Link href="/pos/dashboard">
          <VideoCameraOutlined />
        </Link>
      ),
      getItem(
        <Link href="/pos/category">Category</Link>,
        "category",
        <Link href="/pos/category">
          <VideoCameraOutlined />
        </Link>
      ),
      getItem(
        <Link href="/pos/products">Products</Link>,
        "products",
        <Link href="/pos/products">
          <VideoCameraOutlined />
        </Link>
      ),
    ],
  };
};
