import { Actions } from 'react-native-router-flux';
import { MOBIL_KISIT_CHANGED } from './types';

export const mobilKisitChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: MOBIL_KISIT_CHANGED,
            payload: { props, value }
        });
    };
};
