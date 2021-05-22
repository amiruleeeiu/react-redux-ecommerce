import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductListing from './components/ProductListing/ProductListing';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <ProductListing></ProductListing>
        </Route>
        <Route path="/products/:productId">
          <ProductDetails></ProductDetails>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;