import React, { useReducer } from 'react';

import modelContext from './modelContext';
import modelReducer from './modelReducer';
import {
  CURRENT_TIME_WINDOW
} from '../types';


const ModelState = props => {

  const initialState = {
    currentTimeWindow: 0,

  }

  const [state, dispatch] = useReducer(modelReducer, initialState)



  const setCurrentTimeWindow = value => {
    dispatch({
      type: CURRENT_TIME_WINDOW,
      payload: value
    })
  }


  return (
    <modelContext.Provider
      value={{
        currentTimeWindow: state.currentTimeWindow,
        setCurrentTimeWindow

      }}
    >
      {props.children}
    </modelContext.Provider>
  )

}

export default ModelState;