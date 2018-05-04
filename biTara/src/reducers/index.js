import { combineReducers } from 'redux';
import internetReducers from './internetReducers';

export default combineReducers({
    internetResponse: internetReducers,
});
