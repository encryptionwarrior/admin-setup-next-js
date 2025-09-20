import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableFacetedFilter } from '@/components/ui/table/data-table-faceted-filter';
import { DataTableViewOptions } from '@/components/ui/table/data-table-view-options';
import { bloguserTypes } from '@/features/blogs/blog-data';
import { ChangeEvent, useState } from 'react';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  handleFilterChange: (e: string) => void
}

export function CommonDataTableToolbar<TData>({
  table,
  handleFilterChange
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const hasGlobalFilter = table.getColumn('item1') !== undefined;
  const hasTitle = table.getColumn('item2') !== undefined;
  const [filterval, setFilterval] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterval(value);
    handleFilterChange(value);
  }




  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filter users...'
          value={
            // (hasGlobalFilter ? table.getColumn('item1')?.getFilterValue() as string : "") ?? ''
            filterval
          }
          // onChange={(event) =>
          //   table.getColumn('item1')?.setFilterValue(event.target.value)
          // }
          onChange={handleChange}
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <div className='flex gap-x-2'>
          {table.getColumn('item2') && (
            <DataTableFacetedFilter
              column={table.getColumn('item2')}
              title='Status'
              options={[
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
                { label: 'Invited', value: 'invited' },
                { label: 'Suspended', value: 'suspended' }
              ]}
            />
          )}
          {hasTitle && (
            <DataTableFacetedFilter
              column={table.getColumn('item2')}
              title='Role'
              options={bloguserTypes.map((t) => ({ ...t }))}
            />
          )}
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
