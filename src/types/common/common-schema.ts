export type TCommonSchema = {
    BaseApiResponse: {
      statusCode: number;
       message: string
  success: boolean
    };
    BaseApiErrorResponse: {
      statusCode: number;
      message: string;
      error: string;
    };
    BaseApiPaginationPayload: {
      page: number;
      limit?: number;
      search?: string;
      status?: string;
      sortField?: string;
      sortOrder?: string;
      role?: string;
    };
    BaseMetaResponse: {
       total: number
  limit: number
  page: number
  totalPages: number
  serialNumberStartFrom: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number
  nextPage: number
    };
    BaseApiPaginationResponse: {
      total: number
  limit: number
  page: number
  totalPages: number
  serialNumberStartFrom: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number
  nextPage: number
    };
  };
  