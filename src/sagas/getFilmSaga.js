import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchGetFilm(action) {
	try {
		const query = yield call(() => {
			return fetch(
				`https://api.themoviedb.org/3/movie/${action.id}?api_key=19a8c14831badda7e2277e0932b1d5d1&language=ru`
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
