const API_KEY = '19a8c14831badda7e2277e0932b1d5d1'

const initialState = {
	result: {},
	query: '/home'
}

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH':
			// fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru&query=${action.title}&page=1&include_adult=false&year=${action.year}`)
			// 	.then(response => response.json())
			// 	.then(result => console.log(result))
			return {
				...state,
				query: `/search?q=${action.title}&page=1&include_adult=false&year=${action.year}`
			}
		case 'SEARCH-LIST':
			const result = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=19a8c14831badda7e2277e0932b1d5d1&language=ru&page=1`)
				.then(response => response.json())
				.then(result => {
					if (result) {
						console.log(result)
						return {
							...state,
							page: result.page,
							result: result.results
						}
					}
					console.log(state)
					return state
				})
			console.log(result)
			return {
				...state,
				result: result
			}
		default:
			return state
	}
}

export const searchActionCreator = (title, genre, rate, year) => ({ type: 'SEARCH', title: title, genres: genre, rates: rate, year: year })
export const searchListActionCreator = () => ({ type: 'SEARCH-LIST' })

export default searchReducer