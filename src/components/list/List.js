import React from 'react';
import Cards from './cards/Cards';
import styled from 'styled-components';

const Wrapper = styled.div`
	min-width: 800px;
	max-width: 800px;
`;

const List = ({ result, event }) => {
	return (
		<Wrapper>
			<Cards result={result} event={event} />
		</Wrapper>
	);
};

export default List;
