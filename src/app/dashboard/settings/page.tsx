import { redirect } from 'next/navigation';

export default function SettingsPage() {
  // This will automatically redirect from /dashboard/settings
  // to the new, public /dashboard/settings/profile path.
  redirect('/dashboard/settings/profile');
}
