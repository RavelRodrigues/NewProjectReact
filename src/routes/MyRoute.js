import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ element: Element, isClosed }) {
  const location = useLocation();
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate to="/login" state={{ prevPath: location.pathname }} replace />
    );
  }

  return Element;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
