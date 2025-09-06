"use client"
import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { blogcallTypes, bloguserTypes } from './blog-data';
import { DataTableColumnHeader } from '@/features/tasks/task-data-table-column-header';
import BlogLongText from './blog-long-text';
import { Blog } from './blog-schema';
import { BlogDataTableRowActions } from './blog-data-table-row-actions';
import Image from 'next/image';

export const blogColumns: ColumnDef<Blog>[] = [
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
  {
    accessorKey: 'image',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Image' />
    ),
    cell: ({ row }) => {
      const imageUlr =  row?.original?.photo_url ? row?.original?.photo_url : "";
      return (
        <div className='relative aspect-square'>
          <Image
            src={imageUlr}
            alt={row.getValue('username')}
            fill
            className='rounded-lg'
          />
        </div>
      );
    },
    meta: {
      className: cn(
        'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
        'bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
        'sticky left-6 md:table-cell'
      )
    },
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => (
      <BlogLongText className='max-w-52'>{row.getValue('title')}</BlogLongText>
    ),
    enableHiding: false
  },
  {
    accessorKey: 'author',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Author' />
    ),
    cell: ({ row }) => (
      <BlogLongText className='max-w-36'>{row.getValue('author')}</BlogLongText>
    ),
    enableHiding: false
  },

  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const { status } = row.original;
      const badgeColor = blogcallTypes.get(status);
      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={cn('capitalize', badgeColor)}>
            {row.getValue('status')}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
    enableSorting: false
  },
  {
    id: 'actions',
    cell: BlogDataTableRowActions
  }
];
