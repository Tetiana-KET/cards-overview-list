import { BANKS } from '@/consts/BANKS';
import { CardModel } from '@/models/CardModel';
import { Button, Card, Flex, Progress, Space, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Limit } from './Limit';

const cardStyle: React.CSSProperties = {
  flex: '1 1 23%',
  maxWidth: '385px',
  minWidth: '280px',
  background: '#0D0D0D',
};

interface CardComponentProp {
  card: CardModel;
  onChange: (id: number, checked: boolean) => void;
}

export const CardComponent = ({ card, onChange }: CardComponentProp) => {
  const {
    id,
    bank,
    strategy,
    cardNumber,
    phoneNumber,
    owner,
    dailyLimit,
    monthlyLimit,
    device,
    isNew,
    isMax,
    isSberPrime,
    isActive,
  } = card;

  const handleSwitchChange = (checked: boolean) => {
    onChange(id, checked);
  };

  const bankInfo = BANKS.find((b) => b.name === bank);

  return (
    <Card
      title={
        <Flex gap="small" wrap>
          {isNew && (
            <Button
              color="green"
              variant="filled"
              size="small"
              style={{ border: '1px solid green', pointerEvents: 'none' }}
            >
              New
            </Button>
          )}
          {isMax && (
            <Button
              color="danger"
              variant="filled"
              size="small"
              style={{ border: '1px solid red', pointerEvents: 'none' }}
            >
              Max
            </Button>
          )}

          {isSberPrime && (
            <Button
              color="gold"
              variant="filled"
              size="small"
              style={{ border: '1px solid gold', pointerEvents: 'none' }}
            >
              SberPrime+
            </Button>
          )}
        </Flex>
      }
      style={cardStyle}
    >
      <Flex vertical gap={32}>
        <Switch checked={isActive} onChange={handleSwitchChange} style={{ width: '44px' }} />

        <div>
          <Space style={{ marginBottom: '6px' }}>
            <Button
              variant="solid"
              color={bankInfo?.color || 'default'}
              style={{ pointerEvents: 'none', width: '24px', height: '24px', padding: '0' }}
            >
              <img src={bankInfo?.imgPath} alt={`${bankInfo?.name} logo`} />
            </Button>
            <span style={{ fontWeight: '600', fontSize: '16px' }}>{bankInfo?.name}</span>
            <Button variant="outlined" color="default" size="small" style={{ pointerEvents: 'none', fontSize: '12px' }}>
              {strategy}
            </Button>
          </Space>
          <Space style={{ marginBottom: '16px' }} wrap>
            <p>{cardNumber}</p> <p style={{ color: '#6C6C6C' }}>{phoneNumber}</p>
          </Space>
          <div>
            <Space style={{ color: '#D29B3C' }}>
              <UserOutlined />
              <p>{owner}</p>
            </Space>
          </div>
        </div>

        <Flex vertical gap={24}>
          <Limit limitName="Daily limit" used={dailyLimit.used} max={dailyLimit.total} />
          <Limit limitName="Monthly Limit" used={monthlyLimit.used} max={monthlyLimit.total} />
          <Space>
            <Progress type="circle" percent={+device.percent} strokeColor="#D29B3C" trailColor="#6C6C6C" size={46} />
            <div style={{ marginLeft: '16px' }}>
              <div style={{ color: '#6C6C6C' }}>{`Device (${device.available ? 'available' : 'Unavailable'})`}</div>
              <div>{device.name ? `${device.name} • ${device.version}` : 'Not connected'}</div>
            </div>
          </Space>
        </Flex>
      </Flex>
    </Card>
  );
};
