import React from 'react';
import Input from './types/Input';
import Select from './types/Select';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 750px;
	padding: 25px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	.form-group: {
		width: 100%;
	}
`;
const FlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	.form-group: {
		width: 100%;
	}
`;

const Inputs = ({ dispatch, inputs: { title, year, genres, rates } }) => {
	const changeInput = ({ name, value }) => {
		dispatch({
			type: 'CHANGE_INPUT',
			name: name,
			value: value
		});
	};
	return (
		<Wrapper>
			<Input
				type="text"
				name="title"
				text="Название фильма"
				placeholder="Побег из Шоушенка"
				value={title}
				width="100"
				event={changeInput}
			/>
			<FlexWrapper>
				<Input
					type="number"
					name="year"
					text="Год"
					placeholder="2020"
					value={year}
					event={changeInput}
				/>
				<Select
					name="genres"
					text="Жанр"
					defaultValue={genres.value.value}
					value={genres.select}
					event={changeInput}
				/>
				<Select
					name="rates"
					text="Рейтинг"
					defaultValue={rates.value.value}
					value={rates.select}
					event={changeInput}
				/>
			</FlexWrapper>
		</Wrapper>
	);
};

export default Inputs;
