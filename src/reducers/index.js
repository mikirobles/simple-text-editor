import { combineReducers } from 'redux';
import posts from './posts';
import background from './background';

export default combineReducers({
    posts,
    background
});
