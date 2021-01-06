import { call, put, takeLatest } from 'redux-saga/effects';
import { API_KEY } from '../constants/keys';

function* fetchSearchList(action) {
	try {
		const query = yield call(() => {
			return fetch(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ru&page=${action.page}`
			)
				.then((response) => response.json())
				.then((result) => {
					let newResults = result.results;
					if (action.genre && action.genre !== 0) {
						// при action.genre = 0, жанр любой
						newResults = newResults.filter((data) => {
							if (data.genre_ids.includes(action.genre)) {
								return data;
							} else {
								return 0;
							}
						});
					}
					newResults = newResults.sort((a, b) => {
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
		yield put({ type: 'SEARCH_LIST_FAILED', error: e.message });
	}
}

function* searchListSaga() {
	yield takeLatest('SEARCH_LIST', fetchSearchList);
}

export default searchListSaga;
