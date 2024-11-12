import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, ContainerOutlined, BarChartOutlined } from '@ant-design/icons';
import '../style.css';


const { Sider } = Layout;

const Sidebar: React.FC = () => (
  <Sider collapsible>
    <div className="logo" style={{ height: '32px', margin: '16px', color: 'white', textAlign: 'center' }}>
      Waste Management
    </div>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<ContainerOutlined />}>
        <Link to="/bins">Bins Management</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<BarChartOutlined />}>
        <Link to="/reports">Reports</Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
