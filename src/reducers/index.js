import {combineReducers} from 'redux';

import videos from './videoReducer';
import videoDate from './videoDateReducer';
import videoId from './videoIdReducer';
import delVid from './setVideoToBl';

export default combineReducers({
  videos, videoDate, videoId, delVid
})
