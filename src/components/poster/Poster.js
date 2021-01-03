import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
	height: 100vh;
	top: 0;
	right: 0;
	width: 400px;
`;

const Poster = ({ poster, poster: { result } }) => {
	return (
		<Wrapper>
			{poster.loading ? (
				<>Loading...</>
			) : (
				<div>
					<h2>{result.title}</h2>
					<p>{result.overview}</p>
					<h5>{result.original_title}</h5>
					<p>{result.vote_average}</p>
					<time>{result.release_date}</time>
					<p>
						{`${Math.floor(Number(result.runtime) / 60)} час.
						${result.runtime - Math.floor(Number(result.runtime) / 60) * 60}
						мин.`}
					</p>
					{result.backdrop_path ? 
					<img src={`https://image.tmdb.org/t/p/w300${result.backdrop_path}`} alt="Постер" />
					: 
					<></>
					}
					</div>
			)}
		</Wrapper>
	);
};

export default Poster;
