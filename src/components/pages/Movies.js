import React from 'react';
import List from '../list/List';
import Poster from '../poster/Poster';
import styled from 'styled-components';

const FlexWrapper = styled.div`
	display: flex;
`;
const Button = styled.button`
	position: fixed;
	bottom: 15px;
	right: 15px;
`;
const Title = styled.h1`
	width: 800px;
	text-align: center;
`;

const Movies = ({ state: { search, poster }, dispatch }) => {
	const showPoster = (id) => {
		dispatch({
			type: 'GET_FILM',
			id: id
		});
	};
	const up = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<Title>Результаты поиска</Title>
			<FlexWrapper>
				{'results' in search.result ? (
					search.loading ? (
						<>
							<List result={search.result.results} event={showPoster} />
							<p>Loading..</p>
						</>
					) : (
						<List result={search.result.results} event={showPoster} />
					)
				) : (
					<>Что-то пошло не так</>
				)}
				{poster.show ? <Poster poster={poster} /> : <></>}
			</FlexWrapper>
			<Button type="button" className="btn btn-light btn-sm" onClick={up}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					className="bi bi-arrow-up-circle"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
					/>
				</svg>
			</Button>
		</>
	);
};

export default Movies;
