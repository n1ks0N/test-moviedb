import React from 'react';
import Cards from './cards/Cards';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: calc(100vw - 400px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const List = ({ result, event }) => {
	return (
		<Wrapper>
			<Cards result={result} event={event} />
		</Wrapper>
	);
};

export default List;
