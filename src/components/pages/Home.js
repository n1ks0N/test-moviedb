import React from 'react';
import Filter from '../filter/Filter';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Home = ({ state: { inputs, search }, dispatch, location }) => {
	const searchQuery = () => {
		if (inputs.title) {
			dispatch({
				type: 'SEARCH_QUERY',
				title: inputs.title.split(' ').join('+'),
				genre: inputs.genres.value.id,
				rate: inputs.rates.value.id,
				year: inputs.year,
				page: 1
			});
		} else {
			dispatch({
				type: 'SEARCH_LIST',
				genre: inputs.genres.value.id,
				rate: inputs.rates.value.id,
				year: inputs.year,
				page: 1
			});
		}
	};
	const searchList = () => {
		dispatch({
			type: 'SEARCH_LIST',
			page: ++search.result.page
		});
	};
	return (
		<>
			{location.pathname !== '/search' ? (
				<Wrapper>
					<Filter inputs={inputs} event={searchQuery} dispatch={dispatch} />
					<Link to="/search">
						<Button
							className="btn-link btn-sm"
							text="Список фильмов"
							event={searchList}
						/>
					</Link>
				</Wrapper>
			) : (
				<>
					<Filter inputs={inputs} event={searchQuery} dispatch={dispatch} />
				</>
			)}
		</>
	);
};

export default Home;
