'use client';
import { ColumnDef, Table, Row, Column } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/features/tasks/task-data-table-column-header';

import Image from 'next/image';
import { TBooksModel } from '@/api/hooks/books/schema';
import BlogLongText from '@/features/blogs/blog-long-text';
import { blogcallTypes } from '@/features/blogs/blog-data';
import { CommonDataTableRowActions } from './common-data-table-row-action';
import {
  TCommonData,
  TCommonHeadingName
} from '@/app/dashboard/bookings/modules/BookingListingPage';

type BooksColumnsFnProps<
  TData extends TCommonData,
  THeader extends TCommonHeadingName
> = {
  data: TData[];
  headerName?: THeader;
};

export function CommonColumnsFn<
  TData extends TCommonData,
  THeader extends TCommonHeadingName
>({ data, headerName }: BooksColumnsFnProps<TData, THeader>) {
  const columns: ColumnDef<TData>[] = [
    {
      id: 'select',
      header: ({ table }: { table: Table<TData> }) => (
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
      cell: ({ row }: { row: Row<TData> }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
          className='translate-y-[2px]'
        />
      ),
      meta: {
        className: cn(
          'sticky md:table-cell left-0 z-10 rounded-tl',
          'bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
        )
      },
      enableSorting: false,
      enableHiding: false
    },


     ...generateItemColumns<TData>(headerName),

    {
      accessorKey: 'status',
      header: ({ column }: { column: Column<TData, unknown> }) => (
        <DataTableColumnHeader column={column} title='Status' />
      ),
      cell: ({ row }: { row: Row<TData> }) => {
        const { status } = row.original;
        const badgeColor = blogcallTypes.get(status);
        return (
          <div className='flex space-x-2'>
            <Badge variant='outline' className={cn('capitalize', badgeColor)}>
              {status}
            </Badge>
          </div>
        );
      },
      filterFn: (row: Row<TData>, id, value) => {
        return value.includes(row.getValue(id));
      },
      enableHiding: true,
      enableSorting: false
    },

    {
      id: 'actions',
      cell: CommonDataTableRowActions
    }
  ];

  // ✅ Add image column conditionally (safe, no type errors)
  if (headerName?.image === 'Image') {
    columns.splice(1, 0, {
      accessorKey: 'image',
      header: ({ column }: { column: Column<TData, unknown> }) => (
        <DataTableColumnHeader column={column} title='Image' />
      ),
      cell: ({ row }: { row: Row<TData> }) => {
        const imageUrl =
          row?.original?.image ?? '';
        return (
          <div className='relative aspect-square'>
            <Image src={imageUrl} alt='ss' fill className='rounded-lg' />
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
      enableHiding: true
    });
  }

  return columns;
}



// helper to generate common item columns
function generateItemColumns<TData extends TCommonData>(
  headerName?: TCommonHeadingName
): ColumnDef<TData>[] {
  const itemConfigs: { key: keyof TCommonData; title?: string }[] = [
    { key: 'item1', title: headerName?.item1 },
    { key: 'item2', title: headerName?.item2 },
    { key: 'item3', title: headerName?.item3 },
    { key: 'item4', title: headerName?.item4 },
    { key: 'item5', title: headerName?.item5 },
    { key: 'item6', title: headerName?.item6 }
  ];

  return itemConfigs
    .filter((cfg) => cfg.title) // only add if headerName provided
    .map(
      ({ key, title }): ColumnDef<TData> => ({
        accessorKey: key,
        id: title,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={title ?? ''} />
        ),
        cell: ({ row }) => (
          <BlogLongText>
            {row.original[key] as string}
          </BlogLongText>
        ),
        enableHiding: true,
            
        
      })
    );
}
