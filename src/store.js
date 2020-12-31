import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import searchReducer from './reducers/searchReducer';
import inputsReducer from './reducers/inputsReducer';
import posterReducer from './reducers/posterReducer';
import searchListSaga from './sagas/searchListSaga';
import searchQuerySaga from './sagas/searchQuerySaga';
import getFilmSaga from './sagas/getFilmSaga';

const reducers = combineReducers({
	search: searchReducer,
	inputs: inputsReducer,
	poster: posterReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(searchListSaga);
sagaMiddleware.run(searchQuerySaga);
sagaMiddleware.run(getFilmSaga);

export default store;
