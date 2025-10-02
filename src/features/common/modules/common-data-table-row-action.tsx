"use client"
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { TCommonHeadingName } from '@/app/dashboard/bookings/modules/BookingListingPage';

interface DataTableRowActionsProps<T> {
  row: Row<T>;
    headerName?: TCommonHeadingName;
}

export function CommonDataTableRowActions<T extends {id: string}>({ row, headerName }: DataTableRowActionsProps<T>) {
  const router = useRouter();
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
          >
            <DotsHorizontalIcon className='h-4 w-4' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[160px]'>
          {headerName?.actions?.onEdit && (
          <DropdownMenuItem
            onClick={() => headerName?.actions?.onEdit && headerName?.actions?.onEdit(row?.original?.id)}
          >
            Edit
            <DropdownMenuShortcut>
              <IconEdit size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          {headerName?.actions?.onView && (
          <DropdownMenuItem
             onClick={() => headerName?.actions?.onView && headerName?.actions?.onView(row?.original?.id)}
            className=''
          >
            View
            <DropdownMenuShortcut>
              <IconEye size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          )}
          {headerName?.actions?.onDelete && (
          <DropdownMenuItem
             onClick={() => headerName?.actions?.onDelete && headerName?.actions?.onDelete(row?.original?.id)}
            className='text-red-500!'
          >
            Delete
            <DropdownMenuShortcut>
              <IconTrash size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
