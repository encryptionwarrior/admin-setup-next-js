// "use client";
// import { ColumnDef } from "@tanstack/react-table";
// import { useGetAllBookList } from "@/api/hooks/books/hooks";
// import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
// import { TBooksModel } from "@/api/hooks/books/schema";
// import {  CommonDialogs, UsersDialogType } from "./CommonDialog";
// import { useState } from "react";
// import { CommonColumnsFn } from "./CommonColumns";
// import { CommonTable } from "./CommonTable";


  
//   const CommonListingPage = () => {
//     const [currentRows, setCurrentRows] = useState<number | null>(0);

//     const {data: allBooks, isLoading, } = useGetAllBookList({page:1, limit:10});
//     const [open, setOpen] = useState<UsersDialogType | null>(null)

//     const handleOpen = (str: UsersDialogType | null) => {
//       setOpen(str);
//     }

//     if(isLoading || !allBooks){
//         return  <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
//     }

//     const bookColumns = CommonColumnsFn<TBooksModel["IDOC"]>({ data: [] });

//     return (
//       <>
//     <CommonTable data={allBooks?.data?.data} columns={bookColumns} />
//     <CommonDialogs currentRow={allBooks?.data?.data[currentRows ?? 0]} open={open} setCurrentRow={setCurrentRows} setOpen={handleOpen} />
//       </>
//     )
//   };
  
//   export default CommonListingPage;

import React from 'react'

const CommonListingPage = () => {
  return (
    <div>CommonListingPage</div>
  )
}

export default CommonListingPage
  