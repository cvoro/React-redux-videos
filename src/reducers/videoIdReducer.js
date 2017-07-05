export default function reducer(state = {
  videoId: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
    switch (action.type) {
      case 'FETCH_ID_IDEOS': {
        return{...state, fetching: true}
      }
        case 'FETCH_VIDEOS_ID_FULFILLED':{
          return{...state, fetching:false, fetched: true, videoId: action.payload}
        }
        case 'FETCH_VIDEOS_ID_REJECTED':{
          return{...state, fetching: false, error: action.payload}
        }
    }
    return state;
}
