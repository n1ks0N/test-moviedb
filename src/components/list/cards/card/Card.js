import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	border: 1px solid #555;
	margin: 25px;
	padding: 15px;
	border-radius: 5px;
	cursor: pointer;
	width: 750px;
	height: 196px;
	box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
	:hover {
		border-color: #000;
		box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
	}
`;
const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const Span = styled.span`
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-align: justify;
`;

const Card = ({ title, overview, rates, date, id, event }) => {
	return (
		<Wrapper id={id} onClick={(e) => event(e.currentTarget.id)}>
			<h4>{title}</h4>
			<p>
				<Span>{overview}</Span>
			</p>
			<FlexContainer>
				<p>{rates}</p>
				<time>{date}</time>
			</FlexContainer>
		</Wrapper>
	);
};

export default Card;
