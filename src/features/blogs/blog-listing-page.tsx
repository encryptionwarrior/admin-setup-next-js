import { searchParamsCache } from '@/lib/searchparams';
import { fakeProducts } from '@/constants/mock-api';
import { Product } from '@/constants/data';
import { blogColumns } from './blog-columns';
import { BlogTaskTable } from './blog-task-table';

export default async function BlogListingPage() {

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

  return <BlogTaskTable columns={blogColumns} />;
}
