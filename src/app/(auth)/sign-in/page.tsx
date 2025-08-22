import { Metadata } from 'next';
import SignIn from '@/features/auth/components/sign-in';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {

  return <SignIn />;
}
