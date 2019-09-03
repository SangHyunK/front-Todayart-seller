

import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
    
    
    files: [],
    file: {}

};

const fileReducer = (state = initialState, action) => {
    const { items } = state;
    const { payload } = action;
    switch (action.type) {
       
        case ActionTypes.UPDATE_FILES_SUCCESS:
            if (payload !== null && payload !== undefined) {
                const { data } = payload;
                if (data !== null && data !== undefined) {
                    console.log("updatefile :", data);
                    return {
                        ...state,
                        files: (data === undefined ? [] : data)
                    };
                }
            }
            return state;

        

        case ActionTypes.LOGOUT:
            return initialState;

        
        default:
            return state;
    }
};
export default fileReducer;