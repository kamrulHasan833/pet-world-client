import PropTypes from "prop-types";

import { Navigate, useLocation } from "react-router-dom";
import useIsUser from "../../hooks/useIsUser";

import useAuth from "../../hooks/useAuth";
import Spiner from "../sections/Spiner";

function PrivateRoute({ children }) {
  const { loading } = useAuth();
  const isUser = useIsUser();
  const location = useLocation();
  if (loading) {
    return <Spiner></Spiner>;
  }
  return (
    <>
      {!loading && isUser ? (
        children
      ) : (
        <Navigate state={location} to="/login"></Navigate>
      )}
    </>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
