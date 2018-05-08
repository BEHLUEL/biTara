import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { MOBIL_KISIT_CHANGED, MOBIL_LIST_DATA_SUCCESS } from './types';

export const mobilKisitChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: MOBIL_KISIT_CHANGED,
            payload: { props, value }
        });
    };
};


export const mobilListData = () => {
    return (dispatch) => {
        firebase.database().ref('/Tarifeler/Mobil/')
        .on('value', snapshot => {
            dispatch({ type: MOBIL_LIST_DATA_SUCCESS, payload: snapshot.val() });
        });    
    };
};
