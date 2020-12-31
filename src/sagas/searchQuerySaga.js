import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchSearchQuery(action) {
	try {
		const query = yield call(() => {
			return fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=19a8c14831badda7e2277e0932b1d5d1&language=ru&query=${action.title}&page=${action.page}&include_adult=false&year=${action.year}`
			)
				.then((response) => response.json())
				.then((result) => {
					if (action.genre !== 0) {
						// при action.genre = 0, жанр любой
						const newResults = result.results
							.filter((data) => {
								if (
									data.genre_ids.includes(action.genre) &&
									data.vote_average >= action.rate
								) {
									return data;
								} else {
									return 0;
								}
							})
							.sort((a, b) => {
								// сортировка по дате от новых к старым
								if (a.release_date < b.release_date) return 1;
								if (a.release_date > b.release_date) return -1;
								return 0;
							});
						return {
							...result,
							results: newResults
						};
					} else {
						const newResults = result.results
							.filter((data) => {
								if (data.vote_average >= action.rate) {
									return data;
								} else {
									return 0;
								}
							})
							.sort((a, b) => {
								// сортировка по дате от новых к старым
								if (a.release_date < b.release_date) return 1;
								if (a.release_date > b.release_date) return -1;
								return 0;
							});
						return {
							...result,
							results: newResults
						};
					}
				});
		});
		yield put({ type: 'SEARCH_QUERY_SUCCEEDED', result: query });
	} catch (e) {
		yield put({ type: 'SEARCH_QUERY_FAILED', error: e });
	}
}

function* searchQuerySaga() {
	yield takeLatest('SEARCH_QUERY', fetchSearchQuery);
}

export default searchQuerySaga;
