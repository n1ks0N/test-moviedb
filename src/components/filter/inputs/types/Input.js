import React, { useRef } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
	width: ${(props) => (props.width ? `${props.width}%` : '')};
`;

const InputText = ({ type, name, text, placeholder, value, width, event }) => {
	const input = useRef(value);
	const change = () => {
		event({
			name: name,
			value: input.current.value
		});
	};
	return (
		<FormGroup className="form-group" width={width}>
			<label htmlFor={name}>{text}</label>
			<input
				type={type}
				className="form-control"
				id={name}
				placeholder={placeholder}
				ref={input}
				value={value}
				onChange={change}
			/>
		</FormGroup>
	);
};

export default InputText;
