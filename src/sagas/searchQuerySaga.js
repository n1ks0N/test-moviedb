import { call, put, takeLatest } from 'redux-saga/effects';
import { API_KEY } from '../constants/keys';

function* fetchSearchQuery(action) {
	try {
		const query = yield call(() => {
			return fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru&query=${action.title}&page=${action.page}&include_adult=false&year=${action.year}`
			)
				.then((response) => response.json())
				.then((result) => {
					let newResults = result.results
					if (action.genre !== 0) {
						newResults = newResults.filter((data) => {
							if (
								data.genre_ids.includes(action.genre) &&
								data.vote_average >= action.rate
							) {
								return data;
							} else {
								return 0;
							}
						})
					} else {
						newResults = newResults.filter((data) => {
							if (data.vote_average >= action.rate) {
								return data;
							} else {
								return 0;
							}
						})
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
		yield put({ type: 'SEARCH_QUERY_SUCCEEDED', result: query });
	} catch (e) {
		yield put({ type: 'SEARCH_QUERY_FAILED', error: e.message });
	}
}

function* searchQuerySaga() {
	yield takeLatest('SEARCH_QUERY', fetchSearchQuery);
}

export default searchQuerySaga;
