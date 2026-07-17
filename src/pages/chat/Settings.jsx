import ThemeSwitch from "../../components/settings/ThemeSwitch";
import NotificationSettings from "../../components/settings/NotificationSettings";
import PrivacySettings from "../../components/settings/PrivacySettings";
import LogoutButton from "../../components/settings/LogoutButton";

function Settings() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto max-w-3xl">

        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <div className="space-y-6">

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
