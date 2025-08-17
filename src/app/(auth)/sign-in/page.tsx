import { Metadata } from 'next';
import SignInViewPage from '@/features/auth/components/sign-in-view';
import SignIn from '@/features/auth/components/sign-in';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {
  let stars = 3000; // Default value

  return <SignIn />;
}
