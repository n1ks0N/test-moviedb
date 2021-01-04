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
					/* добавить проверку на action.rate */
					if (action.genre !== 0 || action.genre) {
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
						if (action.rate) {
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
						} else {
							return result;
						}
					}
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
