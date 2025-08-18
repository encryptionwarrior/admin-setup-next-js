import { DataTableToolbars } from '@/components/data/data-table-toolbars';
import { Task } from '@/components/data/schema';
import { DataTable } from '@/components/data/data-table';
import { DataTableToolbar } from '@/components/ui/table/data-table-toolbar';
// import { DataTableToolbar } from '@/components/ui/table/data-table-toolbar';

import { useDataTable } from '@/hooks/use-data-table';

import { ColumnDef } from '@tanstack/react-table';
import { parseAsInteger, useQueryState } from 'nuqs';
import { tasks } from '@/components/data/tasks';
import { UsersTable } from './users-table';
import { users } from './users';
import { User } from './schema';
interface ProductTableParams<TData, TValue> {
  columns: ColumnDef<User>[];
}
export function UserTaskTable<TData, TValue>({
  columns
}: ProductTableParams<TData, TValue>) {
  // const [pageSize] = useQueryState('perPage', parseAsInteger.withDefault(10));

  // const pageCount = Math.ceil(totalItems / pageSize);

  // const { table } = useDataTable({
  //   data, // product data
  //   columns, // product columns
  //   pageCount: pageCount,
  //   shallow: false, //Setting to false triggers a network request with the updated querystring.
  //   debounceMs: 500
  // });

  return (
    // <DataTable table={table}>
    //   <DataTableToolbars table={table} />
    // </DataTable>
    <UsersTable data={users} columns={columns} />
  );
}
