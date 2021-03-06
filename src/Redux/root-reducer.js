import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import shopReducer from "./Shop/ShopReducer";
import { cartReducer } from "./Cart/CartReducer";
import userReducer from "./User/UserReducer";
const presisitConfig = {
  key: "root",
  storage,
  whiteList: [],
};
const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  user: userReducer,
});

export default persistReducer(presisitConfig, rootReducer);
