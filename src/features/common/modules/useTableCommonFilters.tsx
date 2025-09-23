'use client';

import { useDebounce } from '@/hooks/use-debounce';
import { SortingState } from '@tanstack/react-table';
import { useCallback, useState } from 'react';

interface useTableFiltersProps<T extends object> {
  extraPayload: T;
}
type BasePayload = {
  page: number;
  limit: number;
  search: string;
  sortField: string;
  sortOrder: string;
  status?: string;
};

const useTableFilters = <T extends object>({ extraPayload }: useTableFiltersProps<T>) => {
  const [search, setSearch] = useState('');

  const [filters, setFilters] = useState<Record<string, string>>({
    status: '',
  });


const debouncedSearchVal = useDebounce(search.trim(), 500);


  const [payload, setPayload] = useState<BasePayload & T>({
    page: 1,
    limit: 3,
    search: '',
    sortField: '',
    status: '',
    sortOrder: 'desc',

    ...extraPayload,
  });

  const handleSearch = useCallback((val: string) => {
    setSearch(val.toLowerCase());
  }, []);

  const handleFilterChange = useCallback((name: string, value: string) => {
    console.info('handleFilterChange ++++', name, value);
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
    setPayload(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSortModelChange = (newModel: SortingState) => {
    if (newModel.length) {
      setPayload({
        ...payload,
        sortField: newModel[0].id,
        sortOrder: newModel[0].desc ? 'desc' : 'asc',
      });
    } else {
      setPayload({
        ...payload,
        sortField: '',
        sortOrder: 'desc',
      });
    }
  };

  const handleChangePage = (newPage: number) => {
    setPayload({
      ...payload,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (value: number) => {
    setPayload({
      ...payload,
      limit: value,
      page: 1,
    });
  };

  const finalPayload = {
    ...payload,
    search: debouncedSearchVal,
  };

  return {
    handleChangePage,
    handleChangeRowsPerPage,
    search,
    onSortModelChange,
    handleSearch,
    handleFilterChange,
    payload: finalPayload,
    setPayload,
    status: filters.status,
    approvalStatus: filters.approved,
    category: filters.category,
    endDate: filters.endDate,
    startDate: filters.startDate,
    price: filters.price,
    billingCycle: filters.billingCycle,
  };
};

export default useTableFilters;
