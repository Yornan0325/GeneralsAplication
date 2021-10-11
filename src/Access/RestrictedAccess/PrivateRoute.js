import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "../../Context/UseContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { registeredUser } = useContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        registeredUser ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;