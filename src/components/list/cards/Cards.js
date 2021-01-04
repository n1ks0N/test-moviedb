import React from 'react';
import Card from './card/Card';

const Cards = ({ result, event }) => {
	return (
		<>
			{result.map((data) => (
				<Card
					key={data.id}
					title={data.title}
					overview={data.overview}
					rates={data.vote_average}
					date={
						data.release_date
							? data.release_date.split('-')[0]
							: 'Дата выхода неизвестна'
					} // отображение только года
					id={data.id}
					event={event}
				/>
			))}
		</>
	);
};

export default Cards;
