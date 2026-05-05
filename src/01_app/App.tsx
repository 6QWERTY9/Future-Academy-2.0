import { RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';
import { routes } from './router/router'; // Твой файл с массивом

// Создаем объект роутера на основе твоего массива
const router = createBrowserRouter(routes as RouteObject[]);

function App() {
  return (
    // Вместо <BrowserRouter> используем RouterProvider
    <RouterProvider router={router} />
  );
}

export default App;

