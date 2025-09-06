import { TCommonSchema } from "@/types/common/common-schema";
import { useQuery } from "@tanstack/react-query";
import { TBooksModel } from "./schema";
import axiosInstance from "@/api/axiosInstance/axiosInstance";
import { endpoints } from "@/api/endpoints/endpoints";

const queryURL = (payload: TCommonSchema["BaseApiPaginationPayload"]) => {
    return `?page=${payload.page}&limit=${payload.limit}&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech`;

}


export const useGetAllBookList = (payload: TCommonSchema["BaseApiPaginationPayload"]) => {
    return useQuery<TBooksModel["getAllBooksSuccessResponse"], Error>({
        queryKey: ["BooksAll", JSON.stringify(payload)],
        queryFn: async () => {
            const res = await axiosInstance.get<TBooksModel["getAllBooksSuccessResponse"]>(
                `${endpoints.books.all}?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech`
              );
        
              return res?.data;
        }
    })
}