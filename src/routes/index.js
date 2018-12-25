import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Principal from "../pages";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Principal} />
        </Switch>
    </BrowserRouter>
);

export default Router;
