import React from 'react';

import { Layout, theme } from 'antd';
import { Logo } from '@/components/ui/Logo';
import { SideBarMenu } from './components/SideBar/SideBarMenu';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { LoginBlock } from './components/LoginBlock';

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
  height: 'fit-content',
  borderBottom: '1px solid #161616',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap-reverse',
  gap: '25px',
};

export const AppLayout = () => {
  const {
    token: { colorBgContainer, colorBgBase },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        width={220}
        breakpoint="sm"
        collapsedWidth={30}
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
        >
          <Breadcrumbs />
          <LoginBlock />
        </Header>
        <Content style={{ margin: '48px 64px', overflow: 'initial' }} className="responsive-content">
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', borderTop: '1px solid #161616' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
