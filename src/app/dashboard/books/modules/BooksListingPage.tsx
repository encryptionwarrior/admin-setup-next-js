"use client";
import { ColumnDef } from "@tanstack/react-table";
import { useGetAllBookList } from "@/api/hooks/books/hooks";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { TBooksModel } from "@/api/hooks/books/schema";
import { BooksColumnsFn } from "./BooksColumns";
import { BooksDialogs, UsersDialogType } from "./BooksDialog";
import { useState } from "react";
import { BooksTable } from "./BooksTable";


  
  const BooksListingPage = () => {
    const [currentRows, setCurrentRows] = useState<number | null>(0);

    const {data: allBooks, isLoading, } = useGetAllBookList({page:1, limit:10});
    const [open, setOpen] = useState<UsersDialogType | null>(null)

    const handleOpen = (str: UsersDialogType | null) => {
      setOpen(str);
    }

    if(isLoading || !allBooks){
        return  <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
    }

    const bookColumns = BooksColumnsFn<TBooksModel["IDOC"]>({ data: [] });

    return (
      <>
    <BooksTable data={allBooks?.data?.data} columns={bookColumns} />
    <BooksDialogs currentRow={allBooks?.data?.data[currentRows ?? 0]} open={open} setCurrentRow={setCurrentRows} setOpen={handleOpen} />
      </>
    )
  };
  
  export default BooksListingPage;
  