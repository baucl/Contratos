import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
import Contratos from "./dashboard/Contratos";
import Contratistas from "./dashboard/Contratistas";

const Routes = () => (
    <Switch>
        <Route exact path={"/contratos"} component={Contratos} />
        <Route exact path={"/contratistas"} component={Contratistas} />
        <Route path="*" component={null} />
    </Switch>
);

export default withRouter(Routes);