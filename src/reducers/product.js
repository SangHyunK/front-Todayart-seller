import {
    FETCH_SINGLE_PRODUCT,
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS,
    FETCH_ARTWORK_SUCCESS
} from "../constants/ActionTypes";

import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
    
    symbol: '￦',
    items: [],
    item: {}

};

const productReducer = (state = initialState, action) => {
    const { items } = state;
    const { payload } = action;
    switch (action.type) {
       
        // case ActionTypes.FETCH_ARTWORK_SUCCESS:
        //     if (payload !== null && payload !== undefined) {
        //         const { data } = payload;
        //         if (data !== null && data !== undefined) {
        //             console.log("fetchartwork :", data);
        //             return {
        //                 ...state,
        //                 items: (data === undefined ? [] : data)
        //             };
        //         }
        //     }
        //     return state;

        

        case ActionTypes.LOGOUT:
            return initialState;

        
        default:
            return state;
    }
};
export default productReducer;