import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  CarOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "./style.scss";

const OwnerSidebar = ({ collapsed }) => {
  return (
    <div className="owner-sidebar">
      <div className="sidebar-logo">
        {collapsed ? (
          <div className="logo-icon">🚗</div>
        ) : (
          <div className="logo-text">
            <span className="brand">CarHub</span>
          </div>
        )}
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        theme="dark"
        className="menu"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<CarOutlined />}>
          My Cars
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default OwnerSidebar;
