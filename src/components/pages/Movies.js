import React from 'react';
import Filter from '../filter/Filter';
import List from '../list/List';
import Poster from '../poster/Poster';

const Movies = ({ state: { inputs, search }, dispatch }) => {
	const searchQuery = () => {
		dispatch({
			type: 'SEARCH_QUERY',
			title: inputs.title,
			genre: inputs.genres.value.id,
			rate: inputs.rates.value.id,
			year: inputs.year,
			page: ++search.result.page
		});
	};
	const showPoster = (id) => {
		console.log(id);
		dispatch({
			type: 'GET_FILM',
			id: id
		});
	};

	return (
		<>
			<Filter inputs={inputs} event={searchQuery} dispatch={dispatch} />
			<h1>Результаты поиска</h1>
			{'results' in search.result ? (
				<List result={search.result.results} event={showPoster} />
			) : (
				<p>Что-то пошло не так...</p>
			)}
		</>
	);
};

export default Movies;
