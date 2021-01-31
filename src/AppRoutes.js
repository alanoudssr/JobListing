import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import List from "./screens/List"
import Show from "./screens/Show"
import ErrorPage from "./screens/ErrorPage"
import Help from "./screens/Help"

const AppRoutes = () => {

    return (
        <Switch>
            <Route exact path="/" component={List} />
            <Route path="/show/:title" component={Show} />
            <Route path="/help" component={Help} />
            <Route path="/404" component={ErrorPage} />
            <Route path="*"
                component={() => <Redirect to={'/404'} />}
            />
        </Switch>
    )

}

export default AppRoutes;