import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import SpruceMoose from '../components/spruce-moose-app';
import Music from '../components/music';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header title="Spruce Moose" subtitle="new EP out soon" />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={SpruceMoose}
                />
                <Route
                    path="/music"
                    component={Music}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;