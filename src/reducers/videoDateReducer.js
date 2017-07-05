export default function reducer(state = {
  videoDate: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
    switch (action.type) {
      case 'FETCH_DATE_VIDEOS': {
        return{...state, fetching: true}
      }
        case 'FETCH_VIDEOS_DATE_FULFILLED':{
          return{...state, fetching:false, fetched: true, videoDate: action.payload}
        }
        case 'FETCH_VIDEOS_DATE_REJECTED':{
          return{...state, fetching: false, error: action.payload}
        }
    }
    return state;
}
