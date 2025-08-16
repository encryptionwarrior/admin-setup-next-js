import { delay } from '@/constants/mock-api';
import ContentSection from '@/features/settings/content-section';
import ProfileForm from '@/features/settings/profile-form';

export default async function SettingsProfile() {
  await delay(1000);
  return (
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <ProfileForm />
    </ContentSection>
  );
}
