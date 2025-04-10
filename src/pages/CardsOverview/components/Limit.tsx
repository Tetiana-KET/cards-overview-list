import { Progress, Space } from 'antd';
import { ReactNode } from 'react';

type LimitProps = {
  title: string;
  percent: number;
  mode: string;
  content: ReactNode;
};

export const Limit = ({ title, percent, mode, content }: LimitProps) => {
  return (
    <Space style={{ flex: `${mode === 'horizontal' ? '1' : '1 1 260px'}`, maxWidth: '260px' }}>
      <Progress type="circle" percent={percent} strokeColor="#D29B3C" trailColor="#6C6C6C" size={46} />
      <div style={{ marginLeft: '16px' }}>
        <div style={{ color: '#6C6C6C' }}>{title}</div>
        <div>
          <div>{content}</div>
        </div>
      </div>
    </Space>
  );
};
