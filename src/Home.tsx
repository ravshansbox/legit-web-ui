import { ComponentType } from 'react';
import { NavLink, useOutlet } from 'react-router-dom';

export const Home: ComponentType = () => {
  const outlet = useOutlet();

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
      <div>{outlet ?? <h1>Home</h1>}</div>
    </div>
  );
};
