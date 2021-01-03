import React from 'react';
import Inputs from './inputs/Inputs';
import Button from './buttons/Button';
import { Link } from 'react-router-dom';

const Filter = ({ inputs, event, dispatch }) => {
	return (
		<div>
			<div>
				<Inputs inputs={inputs} dispatch={dispatch} />
			</div>
			<div>
				<Link to="/search">
					<Button
						className="btn-outline-success btn-lg"
						text="Поиск"
						event={event}
					/>
				</Link>
				<Button className="btn-secondary btn-sm" text="Сбросить" />
			</div>
		</div>
	);
};

export default Filter;
