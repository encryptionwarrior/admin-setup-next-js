import { ColumnDef } from '@tanstack/react-table';
import { BlogsTable } from './blogs-table';
import { blogs } from './blogs';
import { Blog } from './blog-schema';
interface BlogTableParams<TData, TValue> {
  columns: ColumnDef<Blog>[];
}
export function BlogTaskTable<TData, TValue>({
  columns
}: BlogTableParams<TData, TValue>) {


  return <BlogsTable data={blogs} columns={columns} />;
}
