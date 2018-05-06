import { combineReducers } from 'redux';
import internetReducers from './internetReducers';
import mobilReducers from './mobilReducers';

export default combineReducers({
    internetResponse: internetReducers,
    mobilResponse: mobilReducers
});
