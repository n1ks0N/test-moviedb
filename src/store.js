import { combineReducers, createStore } from 'redux'
import searchReducer from './reducers/searchReducer'
import inputsReducer from './reducers/inputsReducer'

const reducers = combineReducers({
  search: searchReducer,
  inputs: inputsReducer
})

const store = createStore(reducers)

export default store