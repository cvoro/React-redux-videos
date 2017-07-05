import axios from 'axios';

export function fetchVideos() {
  return function (dispatch) {
    axios.get('http://localhost:3001/api/all')
    .then((response)=>{
      dispatch({type:'FETCH_VIDEOS_FULFILLED', payload: response.data});
    }).catch((error)=>{
      dispatch({type:'FETCH_VIDEOS_REJECTED', payload: error});
    })
  }
}

export function setToBl(id){
  return function (dispatch){
    axios.put('http://localhost:3001/api/videoInBL', {id})
    .then((response)=>{
      dispatch({type:'DELETE_VIDEO_FULFILLED', payload: response.data});
    }).catch((error)=>{
      dispatch({type:'DELETE_VIDEO_REJECTED', payload: error});
    })
  }
}

export function showBlVideos(){
  return function (dispatch){
    axios.get('http://localhost:3001/api/blackListVideo')
    .then((response)=>{
      dispatch({type:'SHOW_BL_VIDEO_FULFILLED', payload: response.data});
    }).catch((error)=>{
      dispatch({type:'SHOW_BL_VIDEO_REJECTED', payload: error});
    })
  }
}




  // return function (dispatch){
  //   axios.get('http://localhost:3001/api/all')
  // }
