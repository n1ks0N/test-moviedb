const initialState = {};

const posterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_FILM':
			return state;
		case 'GET_FILM_SUCCEEDED':
			return action.result;
		case 'GET_FILM_FAILED':
			return state;
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
