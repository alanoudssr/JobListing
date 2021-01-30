import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./screens/List"
import Show from "./screens/Show"

const AppRoutes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/show/:title" component={Show} />
            </Switch>
        </Router>
    )

}

export default AppRoutes;