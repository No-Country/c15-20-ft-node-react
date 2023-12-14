import React from "react";
import { Navigate } from "react-router-dom";

export default function Protected({ children, auth }) {
  const check = auth ? children : <Navigate to='/login' />;
  return check;
}
