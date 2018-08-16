// reducers/people.js
import {  SET_COUNT } from '../constants';

const initialState = { counter:0 }

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    
   case SET_COUNT:
       return { ...state, counter: action.counterValue };  // action.counterValue paload from input
    default:
      return state;
  }
}
