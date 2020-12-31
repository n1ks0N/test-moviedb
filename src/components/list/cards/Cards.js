import React from 'react';
import Card from './card/Card';

const Cards = ({ result, event }) => {
	console.log(result);
	return (
		<>
			{result.map((data) => (
				<Card
					key={data.id}
					title={data.title}
					overview={data.overview}
					rates={data.vote_average}
					date={data.release_date}
					id={data.id}
					event={event}
				/>
			))}
		</>
	);
};

export default Cards;
