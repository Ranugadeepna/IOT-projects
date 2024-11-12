import React from 'react';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import '../style.css';


const { Header } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item key="1" icon={<SettingOutlined />}>
      Settings
    </Menu.Item>
    <Menu.Item key="2" icon={<LogoutOutlined />}>
      Logout
    </Menu.Item>
  </Menu>
);

const CustomHeader: React.FC = () => (
  <Header className="site-layout-background" style={{ padding: '0 20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
    <Dropdown overlay={userMenu} placement="bottomRight">
      <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
    </Dropdown>
  </Header>
);

export default CustomHeader;
