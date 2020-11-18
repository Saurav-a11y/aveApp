import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { AuthPage } from "./Pages/AuthPage/AuthPage";
import { CheckOutPage } from "./Pages/CheckOutPage/CheckOutPage";
import { ShopPage } from "./Pages/CollectionPage/ShopPage";

import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";

const App = ({ match }) => (
  <div className="app">
    <Header />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/checkout" component={CheckOutPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/product" component={ProductPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
