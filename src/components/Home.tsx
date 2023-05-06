import { ComponentType } from 'react';
import { useOutlet } from 'react-router-dom';
import { Link, Links } from './Links';

const links: Link[] = [
  { to: '/', title: 'Home' },
  { to: '/users', title: 'Users' },
];

export const Home: ComponentType = () => {
  const outlet = useOutlet();

  return (
    <div>
      <Links links={links} />
      <div>{outlet ?? <h1>Home</h1>}</div>
    </div>
  );
};
