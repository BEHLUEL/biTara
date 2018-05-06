import { INTERNET_KISIT_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    tumu: false,
    turktelekom: false,
    superonline: false,
    kablonet: false,
    turknet: false,
    saglayicilar: false,
    limit: false,
    hiz: 0,
    gb: 0,
    tv: false,
    tel: false,
    yalin: false,
    taahhut: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INTERNET_KISIT_CHANGED:
            //  if ([action.payload.props] === 'tumu' & action.payload.value === true) {
            //      return {...state,turktelekom: action.payload.value };
            //      return {...state,superonline: action.payload.value };
            //      return {...state,kablonet: action.payload.value };
            //      return {...state,turknet: action.payload.value };
            //  } else {
                return { ...state, [action.payload.props]: action.payload.value };
             //}
        default:
            return state;
    }
};
