import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchSearchList(action) {
	try {
		const query = yield call(() => {
			return fetch(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=19a8c14831badda7e2277e0932b1d5d1&language=ru&page=${action.page}`
			)
				.then((response) => response.json())
				.then((result) => {
					const newResults = result.results.sort((a, b) => {
						// сортировка по дате от новых к старым
						if (a.release_date < b.release_date) return 1;
						if (a.release_date > b.release_date) return -1;
						return 0;
					});
					return {
						...result,
						results: newResults
					};
				});
		});
		yield put({ type: 'SEARCH_LIST_SUCCEEDED', result: query });
	} catch (e) {
		yield put({ type: 'SEARCH_LIST_FAILED', error: e });
	}
}

function* searchListSaga() {
	yield takeLatest('SEARCH_LIST', fetchSearchList);
}

export default searchListSaga;
