import PageContainer from '@/components/layout/page-container'
import React from 'react'

const page = () => {
  return (
    <PageContainer scrollable>
         <div className='flex-1 space-y-4'>
            <h2 className='text-2xl font-bold tracking-tight'>Booking Details</h2>
            <p className='text-muted-foreground'>
             View the details of your booking here.
             </p>
         </div>
       </PageContainer>
  )
}

export default page