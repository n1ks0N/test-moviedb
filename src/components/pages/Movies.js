import React from 'react';
import List from '../list/List';
import Poster from '../poster/Poster';
import styled from 'styled-components';

const FlexWrapper = styled.div`
	display: flex;
`;
const Title = styled.h1`
	margin-top: 50px;
	width: calc(100vw - 400px);
	text-align: center;
`;
const Alert = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	:hover {
		cursor: pointer;
	}
`;

const Movies = ({ state: { search, poster }, dispatch }) => {
	const showPoster = (id) => {
		dispatch({
			type: 'GET_FILM',
			id: id
		});
	};
	const closeAlert = () => {
		dispatch({
			type: 'CLOSE_ALERT'
		});
	};
	return (
		<>
			<Title>Результаты поиска</Title>
			<FlexWrapper>
				{'results' in search.result ? (
					search.loading ? (
						<>
							<List result={search.result.results} event={showPoster} />
							<div className="spinner-border text-primary" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</>
					) : (
						<List result={search.result.results} event={showPoster} />
					)
				) : (
					<>
						Что-то пошло не так
						<br />
						Произошли технические шоколадки
					</>
				)}
				{poster.show ? <Poster poster={poster} dispatch={dispatch} /> : <></>}
			</FlexWrapper>
			{search.error.status ? (
				<Alert className="alert alert-danger" onClick={closeAlert}>
					{search.error.message}
				</Alert>
			) : (
				<></>
			)}
		</>
	);
};

export default Movies;
