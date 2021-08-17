import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Contratos from "./dashboard/Contratos";
import Contratistas from "./dashboard/Contratistas";
import Dashboard from "../app/dashboard/Index/index";

const Routes = () => (
    <Switch>
        <Route exact path={"/"} component={Dashboard} />
        <Route exact path={"/contratos"} component={Contratos} />
        <Route exact path={"/contratistas"} component={Contratistas} />
        <Route path="*" component={null} />
    </Switch>
);

export default withRouter(Routes);