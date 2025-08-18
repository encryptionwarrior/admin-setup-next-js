// 'use client';
// import { Main } from '@/features/settings/main';
// import { columns } from '@/features/users/user-columns';
// import { UsersDialogs } from '@/features/users/user-dialogs';
// import { UsersPrimaryButtons } from '@/features/users/users-primary-buttons';
// import { UsersTable } from '@/features/users/users-table';
// import UsersProvider from '@/context/users-context';
// import { userListSchema } from '@/features/users/schema';
// import { users } from '@/features/users/users';
// import { tasks } from '@/components/data/tasks';

// export default function Users() {
//   // Parse user list
//   const userList = userListSchema.parse(users);

//   return (
//     <UsersProvider>
//       <Main>
//         <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
//           <div>
//             <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
//             <p className='text-muted-foreground'>
//               Manage your users and their roles here.
//             </p>
//           </div>
//           <UsersPrimaryButtons />
//         </div>
//         <div className='-mx-4 h-[calc(100vh-120px)] flex-1 overflow-auto px-4 py-1 sm:w-[calc(100vw-250px)] lg:flex-row lg:space-y-0 lg:space-x-12'>
//           <UsersTable data={users} columns={columns} />
//         </div>
//       </Main>

//       <UsersDialogs />
//     </UsersProvider>
//   );
// }


import { TasksPrimaryButtons } from '@/components/data/task-primary-buttons';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import TasksProvider from '@/context/task-context';
import ProductListingPage from '@/features/products/components/product-listing';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import { Suspense } from 'react';
import TaskListingPage from '@/features/tasks/tasks-listing-page';
import UserTaskListingPage from '@/features/users/users-listing-page';
import { UsersPrimaryButtons } from '@/features/users/users-primary-buttons';
import UsersProvider from '@/context/users-context';
import { UsersDialogs } from '@/features/users/user-dialogs';

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

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  // const key = serialize({ ...searchParams });

  return (
    <PageContainer scrollable={false}>
      <UsersProvider>
      <TasksProvider>
      <div className='flex flex-1 flex-col space-y-4'>
      <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
             <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-muted-foreground'>
             Manage your users and their roles here.
             </p>
          </div>
          <UsersPrimaryButtons />
        </div>
        <Separator />
        <Suspense
          // key={key}
          fallback={
            <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
          }
        >
          {/* <ProductListingPage /> */}
          <div className='flex-1overflow-auto -mx-6 h-[calc(100vh-200px)] px-4 py-1 sm:w-[calc(100vw-250px)] lg:flex-row lg:space-y-0 lg:space-x-12'>
          {/* <DataTable data={tasks} columns={columns} />         */}
          <UserTaskListingPage/>
          </div>
        </Suspense>
      </div>
      <UsersDialogs />
      </TasksProvider>
      </UsersProvider>
    </PageContainer>
  );
}