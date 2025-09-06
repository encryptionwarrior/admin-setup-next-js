"use client"
import { IconMailPlus, IconUserPlus, IconArticle } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { useUsers } from '@/context/users-context';

export function BlogsPrimaryButtons() {
  const { setOpen } = useUsers();
  return (
    <div className='flex gap-2'>
      {/* <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('invite')}
      >
        <span>Invite User</span> <IconMailPlus size={18} />
      </Button> */}
      <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Add Blogs</span> <IconArticle size={18} />
      </Button>
    </div>
  );
}
