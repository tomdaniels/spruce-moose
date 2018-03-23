import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import Landing from '../components/landing';
import Music from '../components/music';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header title="Spruce Moose" subtitle="new EP out soon" />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Landing}
                />
                <Route
                    exact
                    path="/music"
                    component={Music}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;