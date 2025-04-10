import { getPercentage } from '@/utils/getPersentage';
import { Progress, Space } from 'antd';

type LimitProps = {
  limitName: string;
  used: number;
  max: number;
};

export const Limit = ({ limitName, used, max }: LimitProps) => {
  return (
    <Space>
      <Progress type="circle" percent={getPercentage(used, max)} strokeColor="#D29B3C" trailColor="#6C6C6C" size={46} />
      <div style={{ marginLeft: '16px' }}>
        <div style={{ color: '#6C6C6C' }}>{limitName}</div>
        <div>
          {used} / {max} RUB
        </div>
      </div>
    </Space>
  );
};
