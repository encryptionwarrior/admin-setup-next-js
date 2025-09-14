import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableFacetedFilter } from '@/components/ui/table/data-table-faceted-filter';
import { DataTableViewOptions } from '@/components/ui/table/data-table-view-options';
import { bloguserTypes } from '@/features/blogs/blog-data';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function BooksDataTableToolbar<TData>({
  table
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const hasGlobalFilter = table.getColumn('title') !== undefined;
  const hasTitle = table.getColumn('author') !== undefined;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filter users...'
          value={
            (hasGlobalFilter ? table.getColumn('title')?.getFilterValue() as string : "") ?? ''
          }
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <div className='flex gap-x-2'>
          {table.getColumn('etag') && (
            <DataTableFacetedFilter
              column={table.getColumn('etag')}
              title='Status'
              options={[
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
                { label: 'Invited', value: 'invited' },
                { label: 'Suspended', value: 'suspended' }
              ]}
            />
          )}
          {/* {hasTitle && (
            <DataTableFacetedFilter
              column={hasTitle ? table.getColumn('author') : ""}
              title='Role'
              options={bloguserTypes.map((t) => ({ ...t }))}
            />
          )} */}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
