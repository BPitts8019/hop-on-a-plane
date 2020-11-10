import React from "react";
import { Helmet } from "react-helmet";

function Attributes() {
   return (
      <Helmet>
         <meta charSet="utf-8" />
         {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta
            name="description"
            content="Travel Planner App - allows users to look up countries and places they want to travel."
         />
         <title>Hop on a Plane</title>
      </Helmet>
   );
}

export default Attributes;
