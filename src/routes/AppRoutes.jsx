import { Routes, Route, Navigate } from "react-router-dom";

import ROUTES from "../constants/routes";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/chat/Dashboard";
import Contacts from "../pages/chat/Contacts";
import Profile from "../pages/chat/Profile";
import Settings from "../pages/chat/Settings";

function AppRoutes() {
  return (
    <Routes>
      {/* Default */}
      <Route
        path={ROUTES.HOME}
        element={<Navigate to={ROUTES.LOGIN} replace />}
      />

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />
      </Route>

      {/* Main Application */}
      <Route element={<MainLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
              <h1 className="text-7xl font-bold text-blue-600">404</h1>
              <p className="mt-4 text-xl text-gray-600">
                Page Not Found
              </p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;