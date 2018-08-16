import { ADD_PERSON, DELETE_PERSON ,SET_COUNT} from './constants';

export function addPerson(person) {
  return {
    type: ADD_PERSON,
    person,
  };
}

export function deletePerson(person) {
  return {
    type: DELETE_PERSON,
    person,
  };
}

export function setCount(counterValue) {
  return {
    type: SET_COUNT,
    counterValue,
  };
}
