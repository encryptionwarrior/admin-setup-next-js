"use client";
import { ColumnDef } from "@tanstack/react-table";
import { BooksTable } from "./ BooksTable";
import { useGetAllBookList } from "@/api/hooks/books/hooks";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { TBooksModel } from "@/api/hooks/books/schema";

interface BooksTableParams {
    columns: ColumnDef<TBooksModel["IDOC"]>[];
  }
  
  const BooksListingPage: React.FC<BooksTableParams> = ({ columns }) => {

    const {data: allBooks, isLoading, } = useGetAllBookList({page:1, limit:10});

    if(isLoading || !allBooks){
        return  <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
    }



    return <BooksTable data={allBooks?.data?.data} columns={columns} />;
  };
  
  export default BooksListingPage;
  