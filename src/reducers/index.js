import { combineReducers } from 'redux';

// Import custom components
import authentication from "./authentication.reducer";
import product from "./product";
import fileReducer from "./file"
import seller from "./seller"

const rootReducer = combineReducers({
    auth: authentication,
    product : product,
    fileReducer : fileReducer,
    seller:seller
});

export default rootReducer;