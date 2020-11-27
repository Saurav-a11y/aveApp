import React from "react";
import "./ItemComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { addItemCart } from "../../Redux/Cart/CartAction";
import { withRouter } from "react-router-dom";

const ItemComponent = ({
  item,
  category,
  history,
  location,
  addItemCart,
  match,
}) => {
  const { name, price, imageUrl, id } = item;

  return (
    <div className="itemComponent">
      <span className="price"> ${price} </span>
      <img
        className="img-responsive itemImage"
        alt="itemImage"
        src={imageUrl}
      />
      <div className="collection-footer">
        <div className="title">
          <span> {name} </span>
          <span> ${price} </span>
        </div>

        <div className="itemIconBox">
          <FontAwesomeIcon
            icon={faShoppingCart}
            onClick={() => addItemCart(item)}
            className="fontIcon"
          />
          <FontAwesomeIcon icon={faHeart} className="fontIcon" />
        </div>
        <div
          className="view"
          onClick={() => history.push(`/shop/${category}/${id}`, item)}
        >
          {" "}
          view{" "}
        </div>
      </div>
    </div>
  );
};

export default React.memo(
  withRouter(connect(null, { addItemCart })(ItemComponent))
);
