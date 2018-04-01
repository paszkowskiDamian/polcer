import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { FirebaseProvider, FirebaseContext } from './components/FirebaseProvider'
import { Home } from './pages/Home'
import { config } from './firebase.config'

const Category = (props) => <div>Product {props.match.params.category}</div>

const NotFound = () => <div>404</div>

class AppComponent extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/kategoria/:category" component={Category} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export const App = FirebaseProvider(config)(AppComponent)