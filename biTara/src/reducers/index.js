import { combineReducers } from 'redux';
import internetReducers from './internetReducers';
import mobilReducers from './mobilReducers';
import mobilDataReducer from './mobilDataReducer';
import internetDataReducers from './internetDataReducers';

export default combineReducers({
    internetResponse: internetReducers,
    mobilResponse: mobilReducers,
    mobildataResponse: mobilDataReducer,
    internetdataResponse: internetDataReducers,
});
