import PageContainer from '@/components/layout/page-container'
import { Separator } from '@radix-ui/react-dropdown-menu'
import React, { Suspense } from 'react'
import CommonPrimaryButtons from '@/features/common/modules/CommonPrimaryButtons'
import BookingListingPage from './modules/BookingListingPage'

const Page = () => {
  return (
    <PageContainer>
      {/* <TasksProvider> */}
      <div className='flex flex-1 flex-col space-y-4'>
      <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
             <h2 className='text-2xl font-bold tracking-tight'>Booking List</h2>
            <p className='text-muted-foreground'>
             Manage your bookings here.
             </p>
          </div>
          {/* <CommonPrimaryButtons /> */}
        </div>
        <Separator />
          <div className='flex 1overflow-auto -mx-6  pl-4 pr-2 md:pr-4 py-1 w-[calc(100dvw-0px)]  md:w-[calc(100dvw-250px)] lg:w-[calc(100dvw-250px)]  lg:flex-row lg:space-y-0 lg:space-x-12'>
          <BookingListingPage />
          </div>
      </div>
    
    </PageContainer>
  )
}

export default Page