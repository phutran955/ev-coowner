import React, { useState } from "react";
import { Layout, Menu, Drawer, Avatar, Dropdown, Space, Grid } from "antd";
import { MenuOutlined, CarOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./style.scss"; 

const { Header } = Layout;
const { useBreakpoint } = Grid;

const AppHeader = ({ isAuth, user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  const navItems = [
    { 
      key: "home", 
      label: <NavLink to="/">Home</NavLink> },
    { 
      key: "cars", 
      label: <NavLink to="/cars">Stock Cars</NavLink> },
    { 
      key: "owners", 
      label: <NavLink to="/owners">Our Terms</NavLink> },
    { 
      key: "about", 
      label: <NavLink to="/about">About Us</NavLink> },
  ];

  const userMenu = {
    items: [
      { 
        key: "profile", 
        label: <NavLink to="/profile">Trang cá nhân</NavLink>, icon: <UserOutlined /> },
      { 
        type: "divider" },
      { 
        key: "logout", 
        label: "Đăng xuất", icon: <LogoutOutlined />, onClick: onLogout },
    ],
  };

  return (
    <Header className="app-header">
      {/* Logo */}
      <div className="logo">
        <CarOutlined /> <span>CARHUB</span>
      </div>

      {/* Desktop menu */}
      {screens.md && (
        <div className="nav-menu">
          <Menu theme="dark" mode="horizontal" items={navItems} />
        </div>
      )}

      {/* User + mobile toggle */}
      <div className="header-right">
        {screens.md ? (
          isAuth ? (
            <Dropdown menu={userMenu} placement="bottomRight">
              <Space className="user-info">
                <Avatar className="avatar" icon={<UserOutlined />} />
                <span>{user?.name || "Người dùng"}</span>
              </Space>
            </Dropdown>
          ) : (
            <NavLink to="/login" className="login-link">
              Sign In
            </NavLink>
          )
        ) : (
          <MenuOutlined className="menu-toggle" onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Drawer cho mobile */}
      {!screens.md && (
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          className="mobile-drawer"
        >
          <Menu mode="vertical" items={navItems} />
          <div className="drawer-user">
            {isAuth ? (
              <>
                <Space className="drawer-user-info">
                  <Avatar className="avatar" icon={<UserOutlined />} />
                  <span>{user?.name || "Người dùng"}</span>
                </Space>
                <a className="logout-link" onClick={onLogout}>
                  Logout
                </a>
              </>
            ) : (
              <NavLink to="/login" className="login-link">
                Sign In
              </NavLink>
            )}
          </div>
        </Drawer>
      )}
    </Header>
  );
};

export default AppHeader;
