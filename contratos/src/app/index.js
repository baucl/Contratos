import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Contratos from "./dashboard/Contratos";
import Contratistas from "./dashboard/Contratistas";
import Home from "./dashboard/Home/Index";
import ContratosResumen from "./dashboard/Contratos/Resumen";

const Routes = () => (
    <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/contratos"} component={Contratos} />
        <Route exact path={"/contratistas"} component={Contratistas} />
        <Route exact path={"/contratos-resumen"} component={ContratosResumen} />
        <Route path="*" component={null} />
    </Switch>
);

export default withRouter(Routes);