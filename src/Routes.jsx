import { createBrowserRouter, Navigate } from "react-router";
import LoginForm from "./features/Authentication/LoginForm";
import OAuthCallback from "./features/Authentication/OAuthCallback";
import DefaultLayout from "./layouts/DefaultLayout";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import BookingPage from "./pages/BookingPage";
import DashboardPage from "./pages/DashboardPage";
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
      { path: "dashboard", element: <DashboardPage /> },
      { path: "trains", element: <TrainSearchPage /> },
      { path: "trains/:trainId", element: <TrainDetailsPage /> },
      {
        path: "booking/:trainId",
        element: <BookingPage />,
      },
      {
        path: "booking/confirmation/:bookingId",
        element: <BookingConfirmationPage />,
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
        element: <ReservationDetailsPage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      { path: "help", element: <HelpSupportPage /> },
    ],
  },
  {
    path: "auth/callback",
    element: <OAuthCallback />,
  },
  { path: "login", element: <LoginForm /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
