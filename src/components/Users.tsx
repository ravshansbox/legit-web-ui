import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { useAppContext } from '../AppContext';
import { TableList, useTable } from './TableList';

type User = {
  id: string;
  created_at: string;
  username: string;
  is_root: boolean;
};

const columns: ColumnDef<User>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'created_at', header: 'Creation time' },
  { accessorKey: 'username', header: 'Username' },
  { accessorKey: 'is_root', header: 'Root' },
];

export const Users = () => {
  const { httpClient } = useAppContext();

  const query = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: ({ signal }) => httpClient.request('get', '/users', { signal }),
  });

  const table = useTable({ data: query.data ?? [], columns });

  return (
    <div>
      <h1>Users</h1>
      <TableList table={table} />
    </div>
  );
};
