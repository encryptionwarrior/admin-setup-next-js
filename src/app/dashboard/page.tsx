import { AuthContext } from '@/context/AuthContext/AuthContext';
import { redirect } from 'next/navigation';
import { useContext } from 'react';

export default async function Dashboard() {
  const { user } = useContext(AuthContext)


  if (!user) {
    return redirect('/auth/sign-in');
  } else {
    redirect('/dashboard/overview');
  }
}
