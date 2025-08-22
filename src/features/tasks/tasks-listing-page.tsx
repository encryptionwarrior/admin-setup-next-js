import { columns } from '@/features/tasks/task-columns';
import { TaskTable } from './task-table';
import { searchParamsCache } from '@/lib/searchparams';
import { fakeProducts } from '@/constants/mock-api';


export default async function TaskListingPage() {

  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('name');
  const pageLimit = searchParamsCache.get('perPage');
  const categories = searchParamsCache.get('category');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories })
  };

  const data = await fakeProducts.getProducts(filters);
  // Showcasing the use of search params cache in nested RSCs

  return <TaskTable columns={columns} />;
}
