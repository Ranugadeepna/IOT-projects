import React from 'react';
import * as antd from 'antd';
import Sidebar from './Sidebar';
import CustomHeader from './Header';
import { Outlet } from 'react-router-dom';
import '../style.css';


const { Content, Footer } = antd.Layout;

const Dashboard: React.FC = () => (
  <antd.Layout style={{ minHeight: '100vh' }}>
    <Sidebar />
    <antd.Layout className="site-layout">
      <CustomHeader />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: '80vh' }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Waste Management System ©2024</Footer>
    </antd.Layout>
  </antd.Layout>
);

export default Dashboard;
