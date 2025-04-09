import { AppLayout } from '@/pages/Layout/AppLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // // errorElement: <NotFoundPage />,
    // children: [
    // 	{
    // 		index: true,
    // 		element: <MainPage />,
    // 	},
    // 	{
    // 		path: '/addBook',
    // 		element: <AddBook />,
    // 	},
    // 	{
    // 		path: '/editBook/:id',
    // 		element: <EditBook />,
    // 	},
    // 	],
  },
]);
export default router;
