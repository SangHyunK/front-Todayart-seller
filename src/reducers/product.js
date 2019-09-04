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

        case ActionTypes.FETCH_ARTWORK_SUCCESS:
            if (payload !== null && payload !== undefined) {
                const { data } = payload;
                if (data !== null && data !== undefined) {
                    console.log("fetchartwork :", data);
                    return {
                        ...state,
                        items: (data === undefined ? [] : data)
                    };
                }
            }
            return state;


        case ActionTypes.FETCH_BYARTIST_SUCCESS:
            if (payload !== null && payload !== undefined) {
                const { data } = payload;
                if (data !== null && data !== undefined) {
                    console.log("fetchbyartist :", data);
                    return {
                        ...state,
                        items: (data === undefined ? [] : data)
                    };
                }
            }
            return state;

        case ActionTypes.DELETE_PRODUCT_SUCCESS:
            if (payload !== null && payload !== null) {
                const { data } = payload;
                return {
                    ...state,
                    items: items.filter(detail => detail.productId !== data.productId)
                }
            }
            return state;



        case ActionTypes.LOGOUT:
            return initialState;


        default:
            return state;
    }
};
export default productReducer;