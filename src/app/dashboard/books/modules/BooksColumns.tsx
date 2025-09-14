"use client"
import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/features/tasks/task-data-table-column-header';

import Image from 'next/image';
import { TBooksModel } from '@/api/hooks/books/schema';
import BlogLongText from '@/features/blogs/blog-long-text';
import { blogcallTypes } from '@/features/blogs/blog-data';
import { BlogDataTableRowActions } from '@/features/blogs/blog-data-table-row-actions';
import { BookDataTableRowActions } from './books-data-table-row-action';

type BooksColumnsFnProps<T> = {
  data: T[];
};

export function BooksColumnsFn<T extends {volumeInfo: T}>({}: BooksColumnsFnProps<T>) {
  const columns: ColumnDef<T>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
          className='translate-y-[2px]'
        />
      ),
      meta: {
        className: cn(
          'sticky md:table-cell left-0 z-10 rounded-tl',
          'bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
        )
      },
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
          className='translate-y-[2px]'
        />
      ),
      enableSorting: false,
      enableHiding: false
    },
    // {
    //   accessorKey: 'image',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title='Image' />
    //   ),
    //   cell: ({ row }) => {
    //     const imageUlr =  row?.original?.volumeInfo?.imageLinks?.thumbnail ? row?.original?.volumeInfo?.imageLinks?.thumbnail : "";
    //     return (
    //       <div className='relative aspect-square'>
    //         <Image
    //           src={imageUlr}
    //           // alt={row.getValue('etag')}
    //           alt={"ss"}
    //           fill
    //           className='rounded-lg'
    //         />
    //       </div>
    //     );
    //   },
    //   meta: {
    //     className: cn(
    //       'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
    //       'bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
    //       'sticky left-6 md:table-cell'
    //     )
    //   },
    //   enableHiding: false
    // },
    // {
    //   accessorKey: 'title',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title='Title' />
    //   ),
    //   cell: ({ row }) => {
    //       const { title} = row.original?.volumeInfo;
    //       return(
    //     <BlogLongText className='max-w-52'>{title}</BlogLongText>
    //   )},
    //   enableHiding: false
    // },
    // {
    //   accessorKey: 'author',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title='Author' />
    //   ),
    //   cell: ({ row }) => {
    //       const { authors } = row.original?.volumeInfo;
    //       const author = authors ? authors.join(", ") : "Unknown Author";
    //       return(
    //     <BlogLongText className='max-w-36'>{author}</BlogLongText>
    //   )},
    //   enableHiding: false
    // },
  
    // {
    //   accessorKey: 'status',
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title='Status' />
    //   ),
    //   cell: ({ row }) => {
    //     const { printType } = row.original?.volumeInfo;
    //     const badgeColor = blogcallTypes.get(printType);
    //     return (
    //       <div className='flex space-x-2'>
    //         <Badge variant='outline' className={cn('capitalize', badgeColor)}>
    //           {printType}
    //         </Badge>
    //       </div>
    //     );
    //   },
    //   filterFn: (row, id, value) => {
    //     return value.includes(row.getValue(id));
    //   },
    //   enableHiding: false,
    //   enableSorting: false
    // },
    // {
    //   id: 'actions',
    //   cell: BookDataTableRowActions
    // }
  ];
  return columns;
}

