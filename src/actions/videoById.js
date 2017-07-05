import axios from 'axios';

export function videoById(id){
  return function (dispatch) {
    axios.post('http://localhost:3001/api/videoID', {id})
    .then((response)=>{
      dispatch({type:'FETCH_VIDEOS_ID_FULFILLED', payload: response.data});
    }).catch((error)=>{
      dispatch({type:'FETCH_VIDEOS_ID_REJECTED', payload: error});
    })
  }
}
