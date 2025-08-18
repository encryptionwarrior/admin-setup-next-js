import { searchParamsCache } from '@/lib/searchparams';
import { fakeProducts } from '@/constants/mock-api';
import { Product } from '@/constants/data';
import { UsersTable } from './users-table';
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
  const totalProducts = data.total_products;
  const products: Product[] = data.products;
  // Showcasing the use of search params cache in nested RSCs

  return <UserTaskTable columns={columns} />;
}
