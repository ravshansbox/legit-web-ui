import { flexRender, useReactTable } from '@tanstack/react-table';
import { ColumnDef, Table, getCoreRowModel } from '@tanstack/table-core';
import { styled } from '../stitches';

export function useTable<TData>({ data, columns }: { data: TData[]; columns: ColumnDef<TData>[] }) {
  return useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
}

const TableContainer = styled('table', {
  borderCollapse: 'collapse',
  width: '100%',
});

const HeadCell = styled('th', {
  border: '1px solid lightgrey',
});

const BodyCell = styled('td', {
  border: '1px solid lightgrey',
});

export function TableList<TData>({ table }: { table: Table<TData> }) {
  return (
    <TableContainer>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <HeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </HeadCell>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <BodyCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </BodyCell>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.footer, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </TableContainer>
  );
}
