import { combineReducers } from 'redux';

// Import custom components
import authentication from "./authentication.reducer";
import product from "./product";
import fileReducer from "./file"

const rootReducer = combineReducers({
    auth: authentication,
    product : product,
    fileReducer : fileReducer
});

export default rootReducer;