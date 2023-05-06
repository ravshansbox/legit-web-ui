import { ComponentType } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '../stitches';

const List = styled('ul', {
  display: 'flex',
  gap: '8px',
  listStyleType: 'none',
  marginBlockEnd: 0,
  marginBlockStart: 0,
  padding: '4px',
});

export type Link = { to: string; title: string };

export const Links: ComponentType<{ links: Link[] }> = ({ links }) => (
  <List>
    {links.map((link, index) => (
      <li key={index}>
        <NavLink to={link.to}>{link.title}</NavLink>
      </li>
    ))}
  </List>
);
