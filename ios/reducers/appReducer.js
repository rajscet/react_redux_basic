// reducers/people.js
import { ADD_PERSON, DELETE_PERSON, SET_COUNT } from '../constants';

const initialState = { people: [], counter:0 }

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: [...state.people, action.person]
        
          // action.person paload from input 
      };
    case DELETE_PERSON:
      return {
        people: state.people.filter(p => p.name !== action.person.name)
        
      };
   case SET_COUNT:
       return { ...state, counter: action.counterValue };  // action.counterValue paload from input
    default:
      return state;
  }
}
