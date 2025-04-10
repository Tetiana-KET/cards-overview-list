import { CardsOverview } from '@/pages/CardsOverview/CardsOverview';
import { AppLayout } from '@/pages/Layout/AppLayout';
import { PagePlaceHolder } from '@/pages/PagePlaceHolder/PagePlaceHolder';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/cards/overview" replace /> },
      { path: 'users', element: <PagePlaceHolder /> },
      { path: 'roles', element: <PagePlaceHolder /> },
      {
        path: 'tickets',

        children: [
          { path: 'overview', element: <PagePlaceHolder /> },
          { path: 'analytics', element: <PagePlaceHolder /> },
        ],
      },
      { path: 'orders', element: <PagePlaceHolder /> },
      {
        path: 'cards',
        children: [
          { path: 'overview', element: <CardsOverview /> },
          { path: 'analytics', element: <PagePlaceHolder /> },
        ],
      },
      { path: 'devices', element: <PagePlaceHolder /> },
      { path: 'notifications', element: <PagePlaceHolder /> },
      { path: 'trading-pairs', element: <PagePlaceHolder /> },
      { path: 'teams', element: <PagePlaceHolder /> },
    ],
  },
]);
export default router;
