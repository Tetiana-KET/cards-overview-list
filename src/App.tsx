import { RouterProvider } from 'react-router-dom';
import router from './router/router';

// import { BooksProvider } from './context/BooksContext';
// import { NotificationProvider } from '@context/NotificationContext';

function App() {
	return (
		// <NotificationProvider>
		// 	<BooksProvider>
		<RouterProvider router={router} />
		// 	</BooksProvider>
		// </NotificationProvider>
	);
}

export default App;
