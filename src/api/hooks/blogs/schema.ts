

import { TCommonSchema } from "@/types/common/common-schema";


export type TBookingModel = {
 Data: {
    bookings: TBookingModel["Booking"][]
  } & {
    totalBookings: number
  } & TCommonSchema["BaseApiPaginationResponse"]

       Booking: {
  _id: string
  serviceType: string
  address: string
  location: Location
  serviceDate: string
  serviceTime: string
  status:  "active" | "inactive" | "invited" | "suspended"
  userInfo: TBookingModel["UserInfo"]
  mechanicInfo?: TBookingModel["MechanicInfo"]
},

Location: {
  type: string
  coordinates: number[]
},
UserInfo: {
  _id: string
  avatar: TBookingModel["Avatar"]
  firstName: string
  lastName: string
  phoneNumber: string
},
Avatar: {
  url: string
  localPath: string
  _id: string
},
MechanicInfo: {
  _id: string
  user: string
  first_name: string
  last_name: string
  phone_number: string
  experience: string
  avatar: TBookingModel["Avatar2"]
},
Avatar2: {
  url: string
  localPath: string
  _id: string
}

    getAllBooksSuccessResponse :TCommonSchema['BaseApiResponse'] &  {
      data: TBookingModel['Data']  
    }
    
}

