import React from "react";
import { Route, Switch } from "react-router-dom";
import Attributes from "./attributes/Attributes";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";
import PageNotfound from "./page-not-found/PageNotFound";

function App() {
   return (
      <>
         <Attributes />
         <Header />
         <Switch>
            <Route exact path="/" component={MainPage} />
            <Route component={PageNotfound} />
         </Switch>
         <Footer />
      </>
   );
}

export default App;
