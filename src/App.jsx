import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { FirebaseProvider, FirebaseContext } from './components/FirebaseProvider'
import { config } from './firebase.config'


const Ctx = () => <FirebaseContext.Consumer>{(context) => <div>context{console.log(context)}</div>}</FirebaseContext.Consumer>

const Sample = () => <div><Ctx /></div>

const Category = (props) => <div>Product {props.match.params.category}</div>

const NotFound = () => <div>404</div>

class AppComponent extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={Sample} />
          <Route path="/kategoria/:category" component={Category} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export const App = FirebaseProvider(config)(AppComponent)