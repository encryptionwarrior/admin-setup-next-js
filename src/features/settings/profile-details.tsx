import ContentSection from '@/features/settings/content-section';
import ProfileForm from '@/features/settings/profile-form';

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <ProfileForm />
    </ContentSection>
  );
}
