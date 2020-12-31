const initialState = {
	result: {
		page: 0
	},
	query: '/home',
	loading: false
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH_QUERY_REQUESTED':
			return {
				...state,
				loading: true
			};
		case 'SEARCH_QUERY_SUCCEEDED':
			return {
				...state,
				result: action.result,
				query: '/search',
				loading: false
			};
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
			return {
				...state,
				result: action.result,
				query: '/search',
				loading: false
			};
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
