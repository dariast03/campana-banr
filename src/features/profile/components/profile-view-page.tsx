'use client';

import { useUser } from '@/hooks/use-user';

export default function ProfileViewPage() {
  const { user } = useUser();

  if (!user) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className='flex w-full flex-col p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Profile</h1>
      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Email</label>
          <p className='text-muted-foreground text-sm'>{user.email}</p>
        </div>
        <div>
          <label className='block text-sm font-medium'>Name</label>
          <p className='text-muted-foreground text-sm'>
            {user.user_metadata?.full_name ||
              user.user_metadata?.name ||
              'Not set'}
          </p>
        </div>
        <div>
          <label className='block text-sm font-medium'>User ID</label>
          <p className='text-muted-foreground text-sm'>{user.id}</p>
        </div>
      </div>
    </div>
  );
}
