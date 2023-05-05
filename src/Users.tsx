import { useEffect, useState } from 'react';
import { httpClient } from './httpClient';

export const Users = () => {
  const [users, setUsers] = useState<null | any[]>(null);

  useEffect(() => {
    const abortController = new AbortController();
    httpClient.request('get', '/users', { signal: abortController.signal }).then(setUsers);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user, index) => (
          <li key={index}>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};
