import React from "react";

import { Switch } from "react-router-dom";

import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Configuracao from "../pages/Configuracao";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/configuracao" exact component={Configuracao} />
      <Route path="/login" exact component={Login} />
      <Route component={NotFound} notFound />
    </Switch>
  );
};

export default Routes;
