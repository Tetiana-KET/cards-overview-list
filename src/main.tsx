import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import App from './App.tsx';
import { ConfigProvider, theme } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#D29B3C',
          colorBgContainer: '#0A0A0A',
          colorBgBase: '#0A0A0A',
          colorText: '#DEDEDE',
          controlItemBgActive: '#1F1709',
          controlItemBgHover: '#363129',
          fontFamily: 'SF Pro Text, sans-serif',
          fontSize: 14,
          lineHeight: 1.57,
          colorBorderSecondary: '#161616',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
