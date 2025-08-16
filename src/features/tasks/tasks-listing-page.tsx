import { columns } from '@/components/data/columns';
import { TaskTable } from './task-table';

export default async function TaskListingPage() {
  // Showcasing the use of search params cache in nested RSCs

  return <TaskTable columns={columns} />;
}
