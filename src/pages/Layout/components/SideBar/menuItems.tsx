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
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  { key: 'users', icon: <UserOutlined />, label: <Link to="/users">Users</Link> },
  { key: 'roles', icon: <IdcardOutlined />, label: <Link to="/roles">Roles</Link> },
  {
    key: 'tickets',
    icon: <TagOutlined />,
    label: 'Tickets',
    children: [
      { key: 'ticketsOverview', label: <Link to="/tickets/overview">Overview</Link>, style: { paddingLeft: '24px' } },
      {
        key: 'ticketsAnalytics',
        label: <Link to="/tickets/analytics">Analytics</Link>,
        style: { paddingLeft: '24px' },
      },
    ],
  },
  { key: 'orders', icon: <ContainerOutlined />, label: <Link to="/orders">Orders</Link> },
  {
    key: 'cards',
    icon: <CreditCardOutlined />,
    label: 'Cards',
    children: [
      { key: 'cardsOverview', label: <Link to="/cards/overview">Overview</Link>, style: { paddingLeft: '24px' } },
      { key: 'cardsAnalytics', label: <Link to="/cards/analytics">Analytics</Link>, style: { paddingLeft: '24px' } },
    ],
  },
  { key: 'devices', icon: <TabletOutlined />, label: <Link to="/devices">Devices</Link> },
  { key: 'notifications', icon: <MailOutlined />, label: <Link to="/notifications">Notifications</Link> },
  { key: 'tradingPairs', icon: <SwapOutlined />, label: <Link to="/trading-pairs">Trading Pairs</Link> },
  { key: 'teams', icon: <CrownOutlined />, label: <Link to="/teams">Teams</Link> },
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
