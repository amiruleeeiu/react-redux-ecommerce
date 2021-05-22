import { combineReducers } from "redux";
import {cartProductsReducer, productReducer, selectedProductReducer} from "./productReducers";

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    cartProducts:cartProductsReducer
})

export default reducers
