import { Task } from '@/features/tasks/schema';
import { DataTable } from '@/features/tasks/task-data-table';
import { ColumnDef } from '@tanstack/react-table';
import { tasks } from '@/features/tasks/tasks';
interface ProductTableParams<TData, TValue> {
  columns: ColumnDef<Task>[];
}
export function TaskTable<TData, TValue>({
  columns
}: ProductTableParams<TData, TValue>) {

  return (
    <DataTable data={tasks} columns={columns} />
  );
}
