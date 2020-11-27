import React from "react";
import "./ProductPage.css";
import { Route } from "react-router-dom";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import SingleItemComponent from "../../Components/SingleItemComponent/SingleItemComponent";

const ProductPage = ({ match }) => {
  console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={ProductPageComponent} />
      <Route path={`${match.path}/:itemId`} component={SingleItemComponent} />
    </div>
  );
};

export default ProductPage;
