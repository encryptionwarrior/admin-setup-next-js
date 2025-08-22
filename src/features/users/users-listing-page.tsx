import { searchParamsCache } from '@/lib/searchparams';
import { fakeProducts } from '@/constants/mock-api';
import { Product } from '@/constants/data';
import { columns } from './user-columns';
import { UserTaskTable } from './user-table';

export default async function UserTaskListingPage() {

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

  return <UserTaskTable columns={columns} />;
}
