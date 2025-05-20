import React from "react";
import { Link, useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-55">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-cyan-600">404</h1>
        <h2 className="mb-2 text-2xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
