import React from 'react';
import Inputs from './inputs/Inputs';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 800px;
`;

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 25px;
`;

const Filter = ({ inputs, event, dispatch }) => {
	const reset = () => {
		dispatch({
			type: 'RESET'
		});
	};
	return (
		<Wrapper>
			<div>
				<Inputs inputs={inputs} dispatch={dispatch} />
			</div>
			<FlexWrapper>
				<Button
					className="btn-secondary btn-sm"
					text="Сбросить"
					event={reset}
				/>
				<Link to="/search">
					<Button className="btn-success btn-lg" text="Поиск" event={event} />
				</Link>
			</FlexWrapper>
		</Wrapper>
	);
};

export default Filter;
