import ThemeSwitch from "../../components/settings/ThemeSwitch";
import NotificationSettings from "../../components/settings/NotificationSettings";
import PrivacySettings from "../../components/settings/PrivacySettings";
import LogoutButton from "../../components/settings/LogoutButton";

function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-8 text-2xl font-bold text-gray-800 sm:text-3xl">
          Settings
        </h1>

        <div className="space-y-5">

          <ThemeSwitch />

          <NotificationSettings />

          <PrivacySettings />

          <LogoutButton />

        </div>

      </div>
    </div>
  );
}

export default Settings;