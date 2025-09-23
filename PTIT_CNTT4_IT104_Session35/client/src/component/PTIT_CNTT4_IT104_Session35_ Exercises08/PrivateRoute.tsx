import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const authed = useSelector((s) => s.auth.isAuthenticated);
  return authed ? children : <Navigate to="/login" replace />;
}
