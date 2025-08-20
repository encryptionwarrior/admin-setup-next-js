import { UserProfile } from '@clerk/nextjs';

export default function ProfileViewPage() {
  return (
    <div className='flex overflow-auto max-h-[calc(100dvh+120px)] w-full flex-col p-4'>
      <UserProfile />
    </div>
  );
}
