import React from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  isLogin: boolean;
  children: ReactNode;
};

export default function PrivateRoute({ isLogin, children }: PrivateRouteProps) {
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
