const initialState = {
	result: {
		page: 0,
		total_pages: 1
	},
	query: '/home',
	loading: false,
	last: ''
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
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
					last: 'SEARCH_QUERY'
				};
			} else {
				return {
					...state,
					result: action.result,
					query: '/search',
					loading: false,
					last: 'SEARCH_QUERY'
				};
			}
		case 'SEARCH_QUERY_FAILED':
			return {
				...state,
				result: action.error,
				loading: false
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
					last: 'SEARCH_LIST'
				};
			} else {
				return {
					...state,
					result: action.result,
					query: '/search',
					loading: false,
					last: 'SEARCH_LIST'
				};
			}
		case 'SEARCH_LIST_FAILED':
			return {
				...state,
				result: action.error,
				loading: false
			};

		default:
			return state;
	}
};

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
