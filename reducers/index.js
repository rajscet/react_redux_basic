// reducers/index.js

import { combineReducers } from 'redux'
import appReducer from './appReducer'
import counterReducer from './counterReducer'



const rootReducer = combineReducers({
    appReducer,
    counterReducer
})

export default rootReducer