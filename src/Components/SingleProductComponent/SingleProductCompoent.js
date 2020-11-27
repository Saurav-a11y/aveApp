import React from "react";
import "./SingleProductCompoent.css";
import { ReactComponent as FacebookIcon } from "../../iconsFile/facebook-f-brands.svg";
import { ReactComponent as TwitterIcon } from "../../iconsFile/twitter-brands.svg";
import { ReactComponent as GoolePlusIcon } from "../../iconsFile/google-plus-g-brands.svg";
import { ReactComponent as PintrestIcon } from "../../iconsFile/pinterest-p-brands.svg";
import { ReactComponent as InstagramIcon } from "../../iconsFile/instagram-brands.svg";
import { ReactComponent as EnvolopeIcon } from "../../iconsFile/envelope-regular.svg";
import { SelectItemProperties } from "../SelectItemProperties/SelectItemProperties";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import {
  addItemCart,
  colorSelected,
  sizeSelected,
} from "../../Redux/Cart/CartAction";
import { withRouter } from "react-router-dom";

class SingleProductCompoent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [],
      size: [],
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  componentDidUpdate() {
    console.log(this.props.selectedColor);
    console.log(this.props.selectedSize);
  }
  submitItem = () => {
    const { state } = this.props.location;
    const { selectedColor } = this.props.selectedColor;
    const { selectedSize } = this.props.selectedSize;
    this.props.addItemCart(state, selectedColor, selectedSize);
    this.props.history.push("/");
  };

  render() {
    const { location } = this.props;
    const { state } = location;
    // const name = item.name;
    console.log(state);
    const { name, price, colors, description, imageUrl, size } = state;

    return (
      <div className="singleProduct">
        <div className="singleItems">
          <div className="imgComponent">
            <img
              alt="SingleProductImg"
              className="singleProductImg img-responsive"
              src={imageUrl}
            />
          </div>
          <div className="descComponent">
            <h3 className="product-title"> {name} </h3>
            <div className="list">
              <span className="reviews"> 3 reviews</span>
              <span className="addReview"> add reviews </span>
              <div className="socialLinks">
                <span>Share</span>
                <FacebookIcon className="socialLinkIcon" />
                <TwitterIcon className="socialLinkIcon" />
                <GoolePlusIcon className="socialLinkIcon" />
                <PintrestIcon className="socialLinkIcon" />
                <InstagramIcon className="socialLinkIcon" />
                <EnvolopeIcon className="socialLinkIcon" />
              </div>
            </div>
            <div>
              <span className="productPrice"> $ {price} </span>
              <span className="productDescription"> {description} </span>
            </div>
            <div className="propSelector">
              {state.colors ? (
                <div className="selectorContainer">
                  <span className="selectorTitle"> Choose Colors </span>
                  <SelectItemProperties
                    name="color"
                    value={this.state.color}
                    data={colors}
                    handleChange={this.handleChange}
                    onClick={() => this.props.colorSelected(this.state.color)}
                    placeholder="Choose Color"
                  />
                </div>
              ) : (
                ""
              )}

              {size ? (
                <div className="selectorContainer">
                  <span className="selectorTitle"> Choose Size </span>
                  <SelectItemProperties
                    name="size"
                    value={this.state.size}
                    data={size}
                    handleChange={this.handleChange}
                    onClick={() => this.props.sizeSelected(this.state.size)}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="btnGrp">
              <CustomButton onClick={this.submitItem}>Add To Cart</CustomButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedColor: state.cart.color,
  selectedSize: state.cart.size,
});

export default withRouter(
  connect(mapStateToProps, {
    addItemCart,
    colorSelected,
    sizeSelected,
  })(SingleProductCompoent)
);
