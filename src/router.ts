import { createBrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { CreateUser } from './components/CreateUser';
import { Users } from './components/Users';

export const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      { path: 'users', Component: Users },
      { path: 'users/create', Component: CreateUser },
    ],
  },
]);
