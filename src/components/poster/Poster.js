import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
	height: 100vh;
	top: 0;
	right: 0;
	width: 400px;
	background-color: #f2f2f2;
	padding: 25px;
	overflow-y: scroll;
`;
const Text = styled.p`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0;
`;
const ImgWrapper = styled.div`
	text-align: center;
	width: 100%;
	margin-top: 50px;
`

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
					<Text>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							fill="currentColor"
							className="bi bi-star"
							viewBox="0 0 16 16"
						>
							<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
						</svg>
						&nbsp;
						{result.vote_average}
					</Text>
					<p>
						Дата выхода: <time>{result.release_date}</time>
					</p>
					<div>
						{result.runtime !== 0 ? (
							<Text>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-clock"
									viewBox="0 0 16 16"
								>
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
								</svg>
								&nbsp;
								{result.runtime < 60
									? `${result.runtime} мин.`
									: `${Math.floor(Number(result.runtime) / 60)} час. ${
											result.runtime -
											Math.floor(Number(result.runtime) / 60) * 60
									  } мин.`}
							</Text>
						) : (
							<>Продолжительность фильма неизвестна</>
						)}
					</div>
					<ImgWrapper>
					{result.backdrop_path ? (
						<img
							src={`https://image.tmdb.org/t/p/w300${result.backdrop_path}`}
							alt="Постер"
							align="center"
						/>
					) : (
						<></>
					)}
					</ImgWrapper>
				</div>
			)}
		</Wrapper>
	);
};

export default Poster;
