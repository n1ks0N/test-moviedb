import React from 'react';

const Card = ({ title, overview, rates, date, id, event }) => {
	return (
		<div id={id} onClick={(e) => event(e.currentTarget.id)}>
			<h4>Название: {title}</h4>
			<p>Описание: {overview}</p>
			<p>{rates}</p>
			<time datatime={date}>{date}</time>
		</div>
	);
};

export default Card;
