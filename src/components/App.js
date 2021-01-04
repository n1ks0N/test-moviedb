import React, { useState } from 'react';
import { Route, Switch, useLocation, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = (props) => {
	const location = useLocation();
	const [allow, setAllow] = useState(true);
	const scrolling = () => {
		const height = Math.max(
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
		if (
			window.pageYOffset > height * 0.75 ||
			window.pageYOffset > height - 2000
		) {
			const search = props.state.search;
			const inputs = props.state.inputs;
			if (allow) {
				setAllow(() => false); // работает криво
				setTimeout(() => {
					setAllow(() => true);
				}, 2000);
				console.log('SCROLL:');
				if (search.result.page < search.result.total_pages) {
					console.log(search.result.page, search.result.total_pages);
					props.dispatch({
						type: search.last,
						title: inputs.title,
						genre: inputs.genres.value.id,
						rate: inputs.rates.value.id,
						year: inputs.year,
						page: ++search.result.page // чтобы пришли новые данные, увеличиваем page
					});
				} else {
					console.log('MEGA', search.result.page, search.result.total_pages);
					props.dispatch({
						type: 'SEARCH_LIST',
						page: ++search.result.page // чтобы пришли новые данные, увеличиваем page
					});
				}
			}
		}
	};

	return (
		<div onWheel={scrolling}>
			<Route path="/" render={() => Home(props, location)} />
			<Switch>
				<Route path="/search" component={() => Movies(props)} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
