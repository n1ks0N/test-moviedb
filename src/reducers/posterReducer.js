const initialState = {
	result: {},
	show: false,
	loading: false
};

const posterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_FILM':
			return {
				result: {},
				show: true,
				loading: true
			};
		case 'GET_FILM_SUCCEEDED':
			return {
				...state,
				result: action.result,
				loading: false
			};
		case 'GET_FILM_FAILED':
			return {
				...state,
				result: action.error,
				loading: false
			};
		default:
			return state;
	}
};

export const getFilmActionCreator = () => ({ type: 'GET_FILM' });
export const getFilmSucceededActionCreator = (result) => ({
	type: 'GET_FILM_SUCCEEDED',
	result: result
});
export const getFilmFailedActionCreator = (error) => ({
	type: 'GET_FILM_FAILED',
	error: error
});

export default posterReducer;
