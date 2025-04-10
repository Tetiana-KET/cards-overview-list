import { BANKS } from '@/consts/BANKS';
import { CardModel } from '@/models/CardModel';
import { Button, Card, Flex, Space, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Limit } from './Limit';
import { getPercentage } from '@/utils/getPersentage';
import { formatNumber } from '@/utils/formatNumber';

const cardGridStyle: React.CSSProperties = {
  flex: '1 1 23%',
  maxWidth: '385px',
  minWidth: '295px',
  background: '#0D0D0D',
};

const cardListStyle: React.CSSProperties = {
  flex: '1',
  maxWidth: 'none',
  width: '100%',
  background: '#0D0D0D',
};

const holderNone = {
  display: 'none',
};

const holderBlock = {
  display: 'block',
  color: '#6C6C6C',
};

interface CardComponentProp {
  card: CardModel;
  onChange: (id: number, checked: boolean) => void;
  mode: string;
}

export const CardComponent = ({ card, onChange, mode }: CardComponentProp) => {
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
      style={mode === 'horizontal' ? cardGridStyle : cardListStyle}
    >
      <Flex
        vertical={mode === 'horizontal'}
        gap={mode === 'horizontal' ? 32 : 48}
        align={mode === 'horizontal' ? 'start' : 'center'}
        wrap
      >
        <Switch checked={isActive} onChange={handleSwitchChange} style={{ width: '44px' }} />

        <Flex vertical style={{ width: '292' }}>
          <Space style={{ marginBottom: '6px' }}>
            <Button
              variant="solid"
              color={bankInfo?.color || 'default'}
              style={{ pointerEvents: 'none', width: '24px', height: '24px', padding: '0' }}
            >
              <img src={bankInfo?.imgPath} alt={`${bankInfo?.name} logo`} loading="lazy" />
            </Button>
            <span style={{ fontWeight: '600', fontSize: '16px' }}>{bankInfo?.name}</span>
            <Button variant="outlined" color="default" size="small" style={{ pointerEvents: 'none', fontSize: '12px' }}>
              {strategy}
            </Button>
          </Space>
          <Space wrap>
            <p>{cardNumber}</p> <p style={{ color: '#6C6C6C' }}>{phoneNumber}</p>
          </Space>
        </Flex>

        <div style={{ width: '160px' }}>
          <p style={mode === 'horizontal' ? holderNone : holderBlock}>Holder</p>
          <Space style={{ color: '#D29B3C' }}>
            <UserOutlined />
            <p>{owner}</p>
          </Space>
        </div>

        <Flex vertical={mode === 'horizontal'} flex={'1 1 42%'} gap={16} className="responsive-flex">
          <Limit
            title="Daily limit"
            percent={getPercentage(dailyLimit.used, dailyLimit.total)}
            mode={mode}
            content={`${formatNumber(dailyLimit.used)} / ${formatNumber(dailyLimit.total)} RUB`}
          />
          <Limit
            title="Monthly Limit"
            percent={getPercentage(monthlyLimit.used, monthlyLimit.total)}
            mode={mode}
            content={`${formatNumber(monthlyLimit.used)} / ${formatNumber(monthlyLimit.total)} RUB`}
          />
          <Limit
            title={`Device (${device.available ? 'available' : 'unavailable'})`}
            content={device.name ? `${device.name} • ${device.version}` : 'Not connected'}
            percent={+device.percent}
            mode={mode}
          />
        </Flex>
      </Flex>
    </Card>
  );
};
