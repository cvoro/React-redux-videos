export default function reducer(state = {
  delVid: [],
  fetching: false,
  deleted: false,
  error: null
}, action) {
    switch (action.type) {
      case 'DELETE_DATE_VIDEO': {
        return{...state, fetching: true}
      }
        case 'DELETE_VIDEO_FULFILLED':{
          return{...state, fetching:false, deleted: true, delVid: action.payload}
        }
        case 'DELETE_VIDEO_REJECTED':{
          return{...state, fetching: false, error: action.payload}
        }
    }
    return state;
}
