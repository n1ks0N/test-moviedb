import React from 'react';
import Cards from './cards/Cards';

const List = ({ result, event }) => {
	return (
		<>
			<Cards result={result} event={event} />
		</>
	);
};

export default List;
