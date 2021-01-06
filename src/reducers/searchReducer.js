const initialState = {
	result: {
		page: 0,
		total_pages: 1,
		results: []
	},
	query: '/home',
	loading: false,
	last: null,
	error: {
		status: false,
		message: null
	}
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CLOSE_ALERT':
			return {
				...state,
				error: {
					...state.error,
					status: false
				}
			};

		case 'SEARCH_QUERY':
			return {
				...state,
				loading: true
			};
		case 'SEARCH_QUERY_SUCCEEDED':
			if (action.result.page > 1) {
				const arr = action.result.results;
				for (let i = 0; i < action.result.results.length; i++) {
					for (let t = 0; t < state.result.results.length; t++) {
						if (action.result.results[i].id === state.result.results[t].id) {
							arr.splice(i, 1);
						}
					}
				}
				return {
					...state,
					result: {
						...action.result,
						results: state.result.results.concat(arr)
					},
					query: '/search',
					loading: false,
					last: 'SEARCH_QUERY',
					error: {
						status: false,
						message: null
					}
				};
			} else {
				return {
					...state,
					result: action.result,
					query: '/search',
					loading: false,
					last: 'SEARCH_QUERY',
					error: {
						status: false,
						message: null
					}
				};
			}
		case 'SEARCH_QUERY_FAILED':
			return {
				...state,
				loading: false,
				error: {
					status: true,
					message: action.error
				}
			};

		case 'SEARCH_LIST':
			return {
				...state,
				loading: true
			};
		case 'SEARCH_LIST_SUCCEEDED':
			if (action.result.page > 1) {
				const arr = action.result.results;
				for (let i = 0; i < action.result.results.length; i++) {
					for (let t = 0; t < state.result.results.length; t++) {
						if (action.result.results[i].id === state.result.results[t].id) {
							arr.splice(i, 1);
						}
					}
				}
				return {
					...state,
					result: {
						...action.result,
						results: state.result.results.concat(arr)
					},
					query: '/search',
					loading: false,
					last: 'SEARCH_LIST',
					error: {
						status: false,
						message: null
					}
				};
			} else {
				return {
					...state,
					result: action.result,
					query: '/search',
					loading: false,
					last: 'SEARCH_LIST',
					error: {
						status: false,
						message: null
					}
				};
			}
		case 'SEARCH_LIST_FAILED':
			return {
				...state,
				loading: false,
				error: {
					status: true,
					message: action.error
				}
			};

		default:
			return state;
	}
};

export const closeAlertActionCreator = () => ({
	type: 'CLOSE_ALERT'
});

export const searchQueryActionCreator = () => ({
	type: 'SEARCH_QUERY'
});
export const searchQuerySucceededActionCreator = (result) => ({
	type: 'SEARCH_QUERY_SUCCEEDED',
	result: result
});
export const searchQueryFailedActionCreator = (error) => ({
	type: 'SEARCH_QUERY_FAILED',
	error: error
});

export const searchListActionCreator = () => ({
	type: 'SEARCH_LIST'
});
export const searchListSucceededActionCreator = (result) => ({
	type: 'SEARCH_LIST_SUCCEEDED',
	result: result
});
export const searchListFailedActionCreator = (error) => ({
	type: 'SEARCH_LIST_FAILED',
	error: error
});

export default searchReducer;
