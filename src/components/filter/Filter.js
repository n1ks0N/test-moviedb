import React from 'react';
import Inputs from './inputs/Inputs';
import Button from './buttons/Button';
import { Link } from 'react-router-dom';

const Filter = ({ inputs, event, dispatch }) => {
	return (
		<>
			<Inputs inputs={inputs} dispatch={dispatch} />
			<Button className="btn-secondary btn-sm" text="Сбросить" />
			<Link to="/search">
				<Button className="btn-success" text="Поиск" event={event} />
			</Link>
		</>
	);
};

export default Filter;
