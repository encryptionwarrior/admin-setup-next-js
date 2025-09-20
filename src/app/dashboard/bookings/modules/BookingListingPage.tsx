"use client";
import { ColumnDef } from "@tanstack/react-table";
import { useGetAllBookList } from "@/api/hooks/books/hooks";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { TBooksModel } from "@/api/hooks/books/schema";

import { useMemo, useState } from "react";
import { CommonDialogs, UsersDialogType } from "@/features/common/modules/CommonDialog";
import { CommonColumnsFn } from "@/features/common/modules/CommonColumns";
import { CommonTable } from "@/features/common/modules/CommonTable";
import { useGetAllBookigsList } from "@/api/hooks/blogs/hook";

type TItems = {
    key: string,
    value: string
} 


export type TCommonHeadingName = {
    item1: string;
    item2: string;
    image?: string
    item3?: string;
    item4?: string
    item5?: string
    item6?: string
}

export type TCommonData = {
    id: string;
    item1: string;
    item2: string;
    item3?: string;
    item4?: string;
    item5?: string;
    item6?: string;
    image?: string
    status: "active" | "inactive" | "invited" | "suspended";
}

type TColumnType = TCommonData


  
  const BookingListingPage = () => {
    const [currentRows, setCurrentRows] = useState<number | null>(0);

    const {data: allBooks, isLoading, } = useGetAllBookList({page:1, limit:10});
    const {data: allBooking, isLoading: isBookingLoadind, } = useGetAllBookigsList({page:1, limit:10});
    const [open, setOpen] = useState<UsersDialogType | null>(null)

    const handleOpen = (str: UsersDialogType | null) => {
      setOpen(str);
    }

      const commonData: TCommonData[] = useMemo(() => allBooking?.data?.bookings ? allBooking?.data?.bookings?.map((items) =>  {
        return {
            id: items?._id,
            item1: items?.userInfo?.firstName ?? "",
            item2: items?.userInfo?.phoneNumber ?? "",
            item3: items?.serviceType ?? "",
            item4: items?.serviceDate ? `${new Date(items?.serviceDate).toLocaleDateString()}:${items?.serviceTime}` : "",
            item5: items?.mechanicInfo?.first_name ?? "N/A",
            item6: items?.mechanicInfo?.phone_number ?? "N/A",
            status: items?.status
        }

    }) : [], [allBooking?.data?.bookings]);

    const headerName: TCommonHeadingName = {
        item1: "User",
        item2: "User Phone",
        item3: "Service Type",
        item4: "Service Date",
        item5: "Mechanic",
        item6: "Phone"
    }


    if(isBookingLoadind || !commonData){
        return  <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
    }

   const bookColumns = CommonColumnsFn<TColumnType, TCommonHeadingName>({
  data: [],
  headerName
});


    return (
      <>
    <CommonTable data={commonData} columns={bookColumns} />
    <CommonDialogs currentRow={commonData[currentRows ?? 0]} open={open} setCurrentRow={setCurrentRows} setOpen={handleOpen} />
      </>
    )
  };
  
  export default BookingListingPage;
  