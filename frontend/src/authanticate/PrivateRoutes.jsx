import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" replace />;
};

export default PrivateRoute;