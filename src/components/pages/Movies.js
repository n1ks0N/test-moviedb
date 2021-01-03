import React, { useMemo } from 'react';
import List from '../list/List';
import Poster from '../poster/Poster';
import styled from 'styled-components';

const FlexWrapper = styled.div`
	display: flex;
`;

const Movies = ({ state: { search, poster }, dispatch }) => {
	const showPoster = (id) => {
		dispatch({
			type: 'GET_FILM',
			id: id
		});
	};
	return (
		<div>
			<h1>Результаты поиска</h1>
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
		</div>
	);
};

export default Movies;
