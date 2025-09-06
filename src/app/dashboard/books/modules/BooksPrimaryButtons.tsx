import { Button } from '@/components/ui/button'
import { IconArticle } from '@tabler/icons-react'
import React from 'react'

const BooksPrimaryButtons = () => {
  return (
    <div className='flex gap-2'>
    {/* <Button
      variant='outline'
      className='space-x-1'
      onClick={() => setOpen('invite')}
    >
      <span>Invite User</span> <IconMailPlus size={18} />
    </Button> */}
    <Button className='space-x-1'>
      <span>Add Blogs</span> <IconArticle size={18} />
    </Button>
  </div>
  )
}

export default BooksPrimaryButtons