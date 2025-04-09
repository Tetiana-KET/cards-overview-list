import { CardsOverview } from '@/pages/CardsOverview/CardsOverview';
import { AppLayout } from '@/pages/Layout/AppLayout';
import { OtherPage } from '@/pages/OtherPage/OtherPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/cards/overview" replace /> },
      { path: 'users', element: <OtherPage /> },
      { path: 'roles', element: <OtherPage /> },
      {
        path: 'tickets',

        children: [
          { path: 'overview', element: <OtherPage /> },
          { path: 'analytics', element: <OtherPage /> },
        ],
      },
      { path: 'orders', element: <OtherPage /> },
      {
        path: 'cards',
        children: [
          { path: 'overview', element: <CardsOverview /> },
          { path: 'analytics', element: <OtherPage /> },
        ],
      },
      { path: 'devices', element: <OtherPage /> },
      { path: 'notifications', element: <OtherPage /> },
      { path: 'trading-pairs', element: <OtherPage /> },
      { path: 'teams', element: <OtherPage /> },
    ],
  },
]);
export default router;
