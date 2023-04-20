import {
  CURRENT_TIME_WINDOW,
} from '../types';



const modelReducer = (state, action) => {
  switch (action.type) {
    case CURRENT_TIME_WINDOW:
      return {
        ...state,
        currentTimeWindow: action.payload
      }
    default:
      return state;
  }
}

export default modelReducer