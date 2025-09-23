import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { TCommonSchema } from '@/types/common/common-schema';

interface DataTablePaginationProps
  extends React.ComponentProps<'div'> {
  metaData: TCommonSchema['BaseMetaResponse'];
  pageSizeOptions: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (limit: number) => void;
}

export function DataTablePagination({
  metaData,
  pageSizeOptions = [10, 20, 30, 40, 50],
  className,
  onPageChange,
  onPageSizeChange,
  ...props
}: DataTablePaginationProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col-reverse items-center justify-between gap-4 overflow-auto p-1 sm:flex-row sm:gap-8',
        className
      )}
      {...props}
    >
      {/* Row info */}
      <div className="text-muted-foreground flex-1 text-sm whitespace-nowrap">
        Showing {metaData.serialNumberStartFrom}–
        {metaData.serialNumberStartFrom + metaData.limit - 1 >
        metaData.total
          ? metaData.total
          : metaData.serialNumberStartFrom + metaData.limit - 1}{' '}
        of {metaData.total} row(s)
      </div>

      {/* Pagination controls */}
      <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        {/* Page size selector */}
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium whitespace-nowrap">Rows per page</p>
          <Select
            value={`${metaData.limit}`}
            onValueChange={(value) => {
              onPageSizeChange(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[4.5rem] [&[data-size]]:h-8">
              <SelectValue placeholder={metaData.limit} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page info */}
        <div className="flex items-center justify-center text-sm font-medium">
          Page {metaData.page} of {metaData.totalPages}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center space-x-2">
          <Button
            aria-label="Go to first page"
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => onPageChange(1)}
            disabled={!metaData.hasPrevPage}
          >
            <ChevronsLeft />
          </Button>
          <Button
            aria-label="Go to previous page"
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => onPageChange(metaData.prevPage)}
            disabled={!metaData.hasPrevPage}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            aria-label="Go to next page"
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => onPageChange(metaData.nextPage)}
            disabled={!metaData.hasNextPage}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            aria-label="Go to last page"
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => onPageChange(metaData.totalPages)}
            disabled={!metaData.hasNextPage}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
