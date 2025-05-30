import { createBrowserRouter, Navigate } from "react-router";
import LoginForm from "./features/Authentication/LoginForm";
import OAuthCallback from "./features/Authentication/OAuthCallback";
import ResetPassword from "./features/Authentication/ResetPassword";
import EditProfile from "./features/profile/EditProfile";
import Profile from "./features/profile/Profile";
import ChangePassword from "./features/profile/UpdatePassword";
import DefaultLayout from "./layouts/DefaultLayout";
import BookingPage from "./pages/BookingPage";
import HelpSupportPage from "./pages/HelpSupportPage";
import HomePage from "./pages/HomePage";
import MyReservationsPage from "./pages/MyReservationsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./pages/ProtectedRoute";
import ReservationDetailsPage from "./pages/ReservationDetailsPage";
import TrainDetailsPage from "./pages/TrainDetailsPage";
import TrainSearchPage from "./pages/TrainSearchPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <HomePage /> },
      { path: "trains", element: <TrainSearchPage /> },
      { path: "trains/:trainId", element: <TrainDetailsPage /> },
      {
        path: "booking/:trainId",
        element: (
          <ProtectedRoute>
            <BookingPage />,
          </ProtectedRoute>
        ),
      },
      {
        path: "reservations",
        element: (
          <ProtectedRoute>
            <MyReservationsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "reservations/:reservationId",
        element: (
          <ProtectedRoute>
            <ReservationDetailsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "user",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
        children: [
          { element: <Navigate to="profile" replace />, index: true },
          { path: "profile", element: <Profile />, index: true },
          { path: "editProfile", element: <EditProfile /> },
          { path: "password", element: <ChangePassword /> },
        ],
      },
      { path: "help", element: <HelpSupportPage /> },
    ],
  },
  {
    path: "auth/callback",
    element: <OAuthCallback />,
  },
  {
    path: "auth/reset-password",
    element: <ResetPassword />,
  },
  { path: "login", element: <LoginForm /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
