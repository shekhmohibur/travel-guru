import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
    if (loading) {
    return <Loading/>;
  }
  if (user && user.email) {
    return children;
  }else{
    return <Navigate to="/auth/login"/>;
  }
};

export default PrivateRoute;
