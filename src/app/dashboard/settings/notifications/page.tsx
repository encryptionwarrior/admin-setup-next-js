import ContentSection from '@/features/settings/content-section'
import { NotificationsForm } from '@/features/settings/notification-form'

export default function SettingsNotifications() {
  return (
    <ContentSection
      title='Notifications'
      desc='Configure how you receive notifications.'
    >
      <NotificationsForm />
    </ContentSection>
  )
}
