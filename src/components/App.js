import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import Movies from './pages/Movies';
import styled from 'styled-components';

const Button = styled.button`
	position: fixed;
	bottom: 15px;
	right: 15px;
	display: ${(props) => (props.show ? 'block' : 'none')};
`;

const App = () => {
	const dispatch = useDispatch();
	const { search, inputs } = useSelector((store) => store);

	const [allowScroll, setAllowScroll] = useState(true);
	const [showBtnUp, setShowBtnUp] = useState(false);

	useEffect(() => {
		if (search.result.results.length < 10 && search.loading === false) {
			dispatch({
				type: 'SEARCH_LIST',
				genre: inputs.genres.value.id,
				rate: inputs.rates.value.id,
				year: inputs.year,
				page: ++search.result.page // чтобы пришли новые данные, увеличиваем page
			});
		}
	}, [search]);

	const scrolling = () => {
		const height = Math.max(
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
		if (
			window.pageYOffset > height * 0.75 ||
			window.pageYOffset > height - 2000
		) {
			if (allowScroll) {
				setAllowScroll(() => false);
				setTimeout(() => {
					setAllowScroll(() => true);
				}, 2000);
				if (search.result.page < search.result.total_pages) {
					dispatch({
						type: search.last,
						title: inputs.title,
						genre: inputs.genres.value.id,
						rate: inputs.rates.value.id,
						year: inputs.year,
						page: ++search.result.page // чтобы пришли новые данные, увеличиваем page
					});
				} else {
					dispatch({
						type: 'SEARCH_LIST',
						genre: inputs.genres.value.id,
						rate: inputs.rates.value.id,
						year: inputs.year,
						page: ++search.result.page // чтобы пришли новые данные, увеличиваем page
					});
				}
			}
		}
		if (window.pageYOffset > 250) {
			if (!showBtnUp) setShowBtnUp(() => true);
		} else {
			if (showBtnUp) setShowBtnUp(() => false);
		}
	};

	const up = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div onWheel={scrolling}>
			<Route path="/" component={Home} />
			<Switch>
				<Route path="/search" component={Movies} />
			</Switch>
			<Button
				type="button"
				className="btn btn-light btn-sm"
				onClick={up}
				show={showBtnUp}
			>
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
		</div>
	);
};

export default App;
