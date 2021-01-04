import { call, put, takeLatest } from 'redux-saga/effects';
import { API_KEY } from '../constants/keys';

function* fetchGetFilm(action) {
	try {
		const query = yield call(() => {
			return fetch(
				`https://api.themoviedb.org/3/movie/${action.id}?api_key=${API_KEY}&language=ru`
			).then((response) => response.json());
		});
		yield put({ type: 'GET_FILM_SUCCEEDED', result: query });
	} catch (e) {
		yield put({ type: 'GET_FILM_FAILED', error: e });
	}
}

function* getFilmSaga() {
	yield takeLatest('GET_FILM', fetchGetFilm);
}

export default getFilmSaga;
