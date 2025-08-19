import { ColumnDef } from '@tanstack/react-table';
import { UsersTable } from './users-table';
import { users } from './users';
import { User } from './schema';
interface ProductTableParams<TData, TValue> {
  columns: ColumnDef<User>[];
}
export function UserTaskTable<TData, TValue>({
  columns
}: ProductTableParams<TData, TValue>) {
  return <UsersTable data={users} columns={columns} />;
}
