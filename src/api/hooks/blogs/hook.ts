import { TCommonSchema } from "@/types/common/common-schema";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api/axiosInstance/axiosInstance";
import { endpoints } from "@/api/endpoints/endpoints";
import {  TBookingModel } from "./schema";
import axiosInstance2 from "@/api/axiosInstance/axiosInstance2";


export const useGetAllBookigsList = (payload: TCommonSchema["BaseApiPaginationPayload"]) => {
    return useQuery<TBookingModel["getAllBooksSuccessResponse"], Error>({
        queryKey: ["BookingsAll", JSON.stringify(payload)],
        queryFn: async () => {
            const res = await axiosInstance2.get<TBookingModel["getAllBooksSuccessResponse"]>(
                `${endpoints.bookings.all}?page=${payload?.page}&limit=${payload?.limit}`
              );
        
              return res?.data;
        }
    })
}