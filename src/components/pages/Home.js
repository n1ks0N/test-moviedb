import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../filter/Filter';
import Button from '../buttons/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { search, inputs } = useSelector((store) => store);

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
