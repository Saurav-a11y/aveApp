const { default: ShopData } = require("./ShopData");

const initialState = {
    shopCollections: ShopData
}

const shopReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}
export default shopReducer