import { combineReducers } from 'redux';

// Import custom components
import authentication from "./authentication.reducer";

const rootReducer = combineReducers({
    auth: authentication
});

export default rootReducer;