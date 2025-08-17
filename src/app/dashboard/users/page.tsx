'use client';
import { Main } from '@/features/settings/main';
import { columns } from '@/features/users/user-columns';
import { UsersDialogs } from '@/features/users/user-dialogs';
import { UsersPrimaryButtons } from '@/features/users/users-primary-buttons';
import { UsersTable } from '@/features/users/users-table';
import UsersProvider from '@/context/users-context';
import { userListSchema } from '@/features/users/schema';
import { users } from '@/features/users/users';
import { tasks } from '@/components/data/tasks';

export default function Users() {
  // Parse user list
  const userList = userListSchema.parse(users);

  return (
    <UsersProvider>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-muted-foreground'>
              Manage your users and their roles here.
            </p>
          </div>
          <UsersPrimaryButtons />
        </div>
        <div className='-mx-4 h-[calc(100vh-120px)] flex-1 overflow-auto px-4 py-1 sm:w-[calc(100vw-250px)] lg:flex-row lg:space-y-0 lg:space-x-12'>
          <UsersTable data={users} columns={columns} />
        </div>
      </Main>

      <UsersDialogs />
    </UsersProvider>
  );
}
