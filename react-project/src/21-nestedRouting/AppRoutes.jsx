import { Routes, Route } from "react-router-dom";
import Dashboard from "./DashBoard";
import Profile from "./Profile";
import Settings from "./Settings";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>
  );
}
