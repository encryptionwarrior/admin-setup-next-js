import { TasksPrimaryButtons } from '@/features/tasks/task-primary-buttons';
import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import TasksProvider from '@/context/task-context';
import { searchParamsCache } from '@/lib/searchparams';
import { SearchParams } from 'nuqs/server';
import { Suspense } from 'react';
import TaskListingPage from '@/features/tasks/tasks-listing-page';
import { TasksDialogs } from '@/features/tasks/task-dialog';

export const metadata = {
  title: 'Dashboard: Products'
};

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
  const searchParams = await props.searchParams;
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);


  return (
    <PageContainer>
      <TasksProvider>
      <div className='flex flex-1 flex-col space-y-4'>
      
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <TasksPrimaryButtons />
      
        </div>
        <Separator />
        <Suspense
          fallback={
            <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
          }
        >
            <div className='flex 1overflow-auto -mx-6  pl-4 pr-2 md:pr-4 py-1 w-[calc(100dvw-0px)]  md:w-[calc(100dvw-250px)] lg:w-[calc(100dvw-250px)]  lg:flex-row lg:space-y-0 lg:space-x-12'>
          <TaskListingPage/>
          </div>
        </Suspense>
      </div>
      <TasksDialogs />
      </TasksProvider>
    </PageContainer>
  );
}

