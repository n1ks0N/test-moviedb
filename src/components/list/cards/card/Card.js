import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #ced4da;
	margin: 25px 0;
	padding: 15px;
	border-radius: 0.25rem;
	cursor: pointer;
	width: 750px;
	height: 196px;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
	:hover {
		box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
	}
`;
const FlexRowContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const SpanOverview = styled.span`
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-align: justify;
`;
const Text = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0;
`;

const Card = ({ title, overview, rates, date, id, event }) => {
	return (
		<Wrapper id={id} onClick={(e) => event(e.currentTarget.id)}>
			<div>
				<h4>{title}</h4>
				<p>
					<SpanOverview>{overview}</SpanOverview>
				</p>
			</div>
			<FlexRowContainer>
				<Text>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						fill="currentColor"
						className="bi bi-star"
						viewBox="0 0 16 16"
					>
						<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
					</svg>
					&nbsp;
					{rates}
				</Text>
				<time>{date}</time>
			</FlexRowContainer>
		</Wrapper>
	);
};

export default Card;
