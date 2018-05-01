import { Actions } from 'react-native-router-flux';
import { INTERNET_KISIT_CHANGED } from './types';

export const internetKisitChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: INTERNET_KISIT_CHANGED,
            payload: { props, value }
        });
    };
};

export const internetAra = ({ props, value }) => {
    //firebase
};

