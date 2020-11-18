import React from "react";
import "./ProductPage.css";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ProductPageComponent from "../../Components/ProductPageComponent/ProductPageComponent";
import { selectCollectionSingleItem } from "../../Redux/Shop/ShopSelector";
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
