import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { INTERNET_KISIT_CHANGED, INTERNET_LIST_DATA_SUCCESS } from './types';

export const internetKisitChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: INTERNET_KISIT_CHANGED,
            payload: { props, value }
        });
    };
};

export const internetListData = () => {
    return (dispatch) => {
        firebase.database().ref('/Tarifeler/Internet/')
        .on('value', snapshot => {
            dispatch({ type: INTERNET_LIST_DATA_SUCCESS, payload: snapshot.val() });
        });    
    };
};
