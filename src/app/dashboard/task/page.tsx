'use client';
import { Main } from '@/features/settings/main';
import TasksProvider from '@/context/task-context';
import { columns } from '@/components/data/columns';
import { DataTable } from '@/components/data/data-table';
import { tasks } from '@/components/data/tasks';
import { TasksDialogs } from '@/components/data/task-dialog';
import { TasksPrimaryButtons } from '@/components/data/task-primary-buttons';
import PageContainer from '@/components/layout/page-container';
import { Suspense } from 'react';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';

export default function Tasks() {
  return (
    <TasksProvider>
      {/* <PageContainer scrollable={false}> */}
      <Main className=''>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <TasksPrimaryButtons />
        </div>
         <Suspense
                  // key={key}
                  fallback={
                    <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
                  }
                >
                   <div className='flex-1overflow-auto -mx-4 h-[calc(100vh-120px)] px-4 py-1 sm:w-[calc(100vw-250px)] lg:flex-row lg:space-y-0 lg:space-x-12'>
          <DataTable data={tasks} columns={columns} />
        </div>
                </Suspense>
      
      </Main>

      <TasksDialogs />
      {/* </PageContainer> */}
    </TasksProvider>
  );
}
