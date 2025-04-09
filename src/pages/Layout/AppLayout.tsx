import React from 'react';

import { Layout, theme } from 'antd';
import { Logo } from '@/components/ui/Logo';
import { SideBarMenu } from './components/SideBar/SideBarMenu';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const sideBarStyle: React.CSSProperties = {
  overflow: 'auto',
  minHeight: '100vh',
  scrollbarWidth: 'thin',
  borderRight: '1px solid #161616',
};

const logoWrapStyle = {
  height: 90,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const headerStyle: React.CSSProperties = {
  padding: '18px 64px',
  height: '80px',
  borderBottom: '1px solid #161616',
};

export const AppLayout = () => {
  const {
    token: { colorBgContainer, colorBgBase },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        width={220}
        style={{
          ...sideBarStyle,
          backgroundColor: colorBgBase,
        }}
      >
        <div style={logoWrapStyle}>
          <Logo />
        </div>
        <SideBarMenu />
      </Sider>
      <Layout>
        <Header
          style={{
            ...headerStyle,
            background: colorBgContainer,
          }}
        />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', borderTop: '1px solid #161616' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
