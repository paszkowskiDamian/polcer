import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { FirebaseProvider } from './components/FirebaseProvider'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Category } from './pages/Category'
import { config } from './firebase.config'

import './styles/style.css'

const NotFound = () => <div>404</div>

class AppComponent extends Component {
  render() {
    return (
      <BrowserRouter >
        <Fragment>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/kategoria/:category" component={Category} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export const App = FirebaseProvider(config)(AppComponent)