import {
  ContainerOutlined,
  CreditCardOutlined,
  CrownOutlined,
  IdcardOutlined,
  MailOutlined,
  SwapOutlined,
  TabletOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  { key: 'users', icon: <UserOutlined />, label: 'Users' },
  { key: 'roles', icon: <IdcardOutlined />, label: 'Roles' },
  {
    key: 'tickets',
    icon: <TagOutlined />,
    label: 'Tickets',
    children: [
      { key: 'ticketsOverview', label: 'Overview', style: { paddingLeft: '24px' } },
      { key: 'ticketsAnalytics', label: 'Analytics', style: { paddingLeft: '24px' } },
    ],
  },
  { key: 'orders', icon: <ContainerOutlined />, label: 'Orders' },
  {
    key: 'cards',
    icon: <CreditCardOutlined />,
    label: 'Cards',
    children: [
      { key: 'cardsOverview', label: 'Overview', style: { paddingLeft: '24px' } },
      { key: 'cardsAnalytics', label: 'Analytics', style: { paddingLeft: '24px' } },
    ],
  },
  { key: 'devices', icon: <TabletOutlined />, label: 'Devices' },
  { key: 'notifications', icon: <MailOutlined />, label: 'Notifications' },
  { key: 'tradingPairs', icon: <SwapOutlined />, label: 'Trading Pairs' },
  { key: 'teams', icon: <CrownOutlined />, label: 'Teams' },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};

  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

export const levelKeys = getLevelKeys(menuItems as LevelKeysProps[]);
