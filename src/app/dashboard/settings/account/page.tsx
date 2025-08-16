import { AccountForm } from '@/features/settings/account-form';
import ContentSection from '@/features/settings/content-section';

export default function SettingsAccount() {
  return (
    <ContentSection
      title='Account'
      desc='Update your account settings. Set your preferred language and
          timezone.'
    >
      <AccountForm />
    </ContentSection>
  );
}
