import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Users } from './Users';

export const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [{ path: 'users', Component: Users }],
  },
]);
