import React from "react";
import { Route, Switch } from "react-router-dom";
import Attributes from "./attributes/Attributes";

function App() {
   return (
      <>
         <Attributes />
         <Switch>
            <Route
               exact
               path="/"
               component={() => {
                  return <h1>Do you wanna Hop on a Plane?</h1>;
               }}
            />
            <Route
               exact
               path="/login"
               component={() => {
                  return <h1>Login Screen</h1>;
               }}
            />
            <Route
               component={() => {
                  return <h1>404 Page Not Found</h1>;
               }}
            />
         </Switch>
      </>
   );
}

export default App;
