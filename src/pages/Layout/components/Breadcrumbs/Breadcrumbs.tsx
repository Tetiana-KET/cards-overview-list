import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbNameMap: Record<string, string> = {
  users: 'Users',
  roles: 'Roles',
  tickets: 'Tickets',
  'tickets/overview': 'Overview',
  'tickets/analytics': 'Analytics',
  orders: 'Orders',
  cards: 'Cards',
  'cards/overview': 'Overview',
  'cards/analytics': 'Analytics',
  devices: 'Devices',
  notifications: 'Notifications',
  'trading-pairs': 'Trading Pairs',
  teams: 'Teams',
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const items = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const title = breadcrumbNameMap[pathSnippets.slice(0, index + 1).join('/')];
    const isLast = index === pathSnippets.length - 1;

    return {
      key: url,
      title: isLast ? (
        <span style={{ color: '#DEDEDE' }}>{title}</span>
      ) : (
        <Link to={url} style={{ color: '#6C6C6C' }}>
          {title}
        </Link>
      ),
    };
  });

  const homeItem =
    pathSnippets.length > 0
      ? [
          {
            key: 'home',
            title: (
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <HomeOutlined />
                <span>Home</span>
              </Link>
            ),
          },
        ]
      : [];

  return (
    <Breadcrumb
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      items={[...homeItem, ...items]}
    />
  );
};
