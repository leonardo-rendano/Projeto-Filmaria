import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';

import Home from './pages/Home/Home';
import Erro from './pages/Erro/Erro';
import Filme from './pages/Filme/Filme'

const Routes = () => {
  return(
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;