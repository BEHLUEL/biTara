import { MOBIL_KISIT_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    tumu: 'Tümünü işaretle',
    turktelekommobil: false,
    turkcell: false,
    vodafone: false,
    dakika: 0,
    sms: 0,
    internet: 0,
    faturali_bireysel: false,
    faturasiz_bireysel: false,
    faturali_kurumsal: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOBIL_KISIT_CHANGED:
            return { ...state, [action.payload.props]: action.payload.value };
        
        default:
            return state;
    }
};
