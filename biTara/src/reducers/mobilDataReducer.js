import { MOBIL_LIST_DATA_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOBIL_LIST_DATA_SUCCESS:
        //console.log(action);
            return action.payload;
        
        default:
            return state;
    }
};
