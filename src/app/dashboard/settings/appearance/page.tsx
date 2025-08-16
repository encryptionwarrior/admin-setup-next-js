import { AppearanceForm } from '@/features/settings/appearance-form';
import ContentSection from '@/features/settings/content-section';

export default function SettingsAppearance() {
  return (
    <ContentSection
      title='Appearance'
      desc='Customize the appearance of the app. Automatically switch between day
          and night themes.'
    >
      <AppearanceForm />
    </ContentSection>
  );
}
