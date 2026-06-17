import AuthWrapper from "./AuthWrapper";
import StoriesAdminDashboard from "./Dashboard";

export default function StoriesAdminPage() {
  return (
    <AuthWrapper>
      <StoriesAdminDashboard />
    </AuthWrapper>
  );
}
