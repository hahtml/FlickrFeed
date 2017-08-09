import { combineReducers } from 'redux';
import FlickrReducer from './reducer-flickr';

const rootReducer = combineReducers({
  flickr: FlickrReducer
});

export default rootReducer;
