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
  handleSearch: (e: string) => void;
    handleFilterChange: (name: string, value: string) => void;
}

export function CommonDataTableToolbar<TData>({
  table,
  handleFilterChange,
  handleSearch
}: DataTableToolbarProps<TData>) {
  const [filterval, setFilterval] = useState("");

    const [status, setStatus] = useState<string[]>([]);

  const handleStatusChange = (newValue: string[]) => {
    setStatus(newValue);

   handleFilterChange('status', newValue.join(','))
  };


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterval(value);
    handleSearch(value);
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
        
              <DataTableFacetedFilter
        title="Status"
        value={status}
        onChange={handleStatusChange}
        options={[
          { label: "Pending", value: "pending" },
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" },
          { label: "Invited", value: "invited" },
          { label: "Suspended", value: "suspended" },
        ]}
      />
       
        </div>
        {status.length > 0 && (
        <Button
          variant="ghost"
          onClick={() => setStatus([])}
          className="h-8 px-2 lg:px-3"
        >
          Reset
        </Button>
      )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
