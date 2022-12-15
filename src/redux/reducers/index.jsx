import { combinedReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combinedReducers({
    allProducts : productReducer
})

export default reducers