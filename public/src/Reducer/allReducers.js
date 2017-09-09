import { combineReducers } from 'redux'

import tweets from './index';
import news from './news';
import youtube from './youtube';
import giphy from './giphy';

export default combineReducers({
    news, 
    tweets,
    youtube,
    giphy
});