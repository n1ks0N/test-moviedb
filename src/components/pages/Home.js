import React from 'react';
import Filter from '../filter/Filter';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';

const Home = ({ state: { inputs, search }, dispatch, location }) => {
	const searchQuery = () => {
		dispatch({
			type: 'SEARCH_QUERY',
			title: inputs.title.split(' ').join('+'),
			genre: inputs.genres.value.id,
			rate: inputs.rates.value.id,
			year: inputs.year,
			page: 1 // чтобы пришли новые данные, увеличиваем page
		});
	};
	const searchList = () => {
		dispatch({
			type: 'SEARCH_LIST',
			page: ++search.result.page
		});
	};
	return (
		<>
			<Filter inputs={inputs} event={searchQuery} dispatch={dispatch} />
			{location.pathname !== '/search' ? (
				<Link to="/search">
					<Button
						className="btn-link btn-sm"
						text="Список фильмов"
						event={searchList}
					/>
				</Link>
			) : (
				<></>
			)}
		</>
	);
};

export default Home;
