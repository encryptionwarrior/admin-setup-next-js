'use client';
import { Main } from '@/features/settings/main';
import TasksProvider from '@/context/task-context';
import { columns } from '@/components/data/columns';
import { DataTable } from '@/components/data/data-table';
import { tasks } from '@/components/data/tasks';
import { TasksDialogs } from '@/components/data/task-dialog';
import { TasksPrimaryButtons } from '@/components/data/task-primary-buttons';
import PageContainer from '@/components/layout/page-container';

export default function Tasks() {
  return (
    <TasksProvider>
      <PageContainer scrollable={false}>
        <Main className='bg-blue-500'>
          <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
              <p className='text-muted-foreground'>
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
            <TasksPrimaryButtons />
          </div>
          <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
            <DataTable data={tasks} columns={columns} />
          </div>
        </Main>

        <TasksDialogs />
      </PageContainer>
    </TasksProvider>
  );
}
