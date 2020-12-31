import React from 'react';

const Button = ({ className, text, event }) => {
	return (
		<button type="button" className={`btn ${className}`} onClick={event}>
			{text}
		</button>
	);
};

export default Button;
