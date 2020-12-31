import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = (props) => {
	// let {id} = useParams()
	// let history = useHistory()
	// let location = useLocation();
	// useEffect(() => {
	//   history.push(location.pathname);
	// }, [location]);
	// const query = props.state.search.query
	// useEffect(() => {
	//   console.log(query)
	//   history.push(query)
	// }, [query])
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => Home(props)} />
				<Route path="/search" render={() => Movies(props)} />
				<Route path="*" render={() => Home(props)} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
