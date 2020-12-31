import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const render = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

render(store.getState());
store.subscribe(() => {
	const state = store.getState();
	render(state);
});

reportWebVitals();
