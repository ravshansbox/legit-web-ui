import { createBrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { NewUser } from './components/NewUser';
import { Users } from './components/Users';

export const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      { path: 'users', Component: Users },
      { path: 'users/new', Component: NewUser },
    ],
  },
]);
