import React from "react";
import "./ShopPage.css";
import { Route } from "react-router-dom";
import { ShopCategory } from "../../Components/ShopCategory/ShopCategory";
import ShopCategoryItem from "../../Components/ShopCategoryItem./ShopCategoryItem";

import SingleItemComponent from "../../Components/SingleItemComponent/SingleItemComponent";

export const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="single-page">
      <Route exact path={`${match.path}`} component={ShopCategory} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={ShopCategoryItem}
      />
      <Route
        exact
        path={`${match.path}/:collectionId/:itemId`}
        component={SingleItemComponent}
      />
    </div>
  );
};
