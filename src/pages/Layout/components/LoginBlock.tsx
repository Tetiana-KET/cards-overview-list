import { Avatar, Button } from 'antd';
import { CrownOutlined, LogoutOutlined } from '@ant-design/icons';
import { CSSProperties } from 'react';

const userStyle: CSSProperties = { color: '#DEDEDE', margin: 0, height: 'fit-content', lineHeight: '22px' };

export const LoginBlock = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <Avatar
        size="large"
        style={{ backgroundColor: '#DEDEDE' }}
        icon={<CrownOutlined style={{ color: '#0A0A0A' }} />}
      />

      <div>
        <p style={userStyle}>username</p>
        <p style={{ ...userStyle, color: '#6C6C6C' }}>Admin</p>
      </div>
      <Button type="text" icon={<LogoutOutlined style={{ color: '#6C6C6C', width: 'fit-content' }} />} />
    </div>
  );
};
