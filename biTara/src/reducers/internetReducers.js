import { INTERNET_KISIT_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    saglayicilar: false,
    limit: false,
    hiz: 5,
    gb: 23,
    tv: false,
    tel: false,
    yalin: false,
    taahhut: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INTERNET_KISIT_CHANGED:
            return { ...state, [action.payload.props]: action.payload.value };

        default:
        return state;
    }
};
