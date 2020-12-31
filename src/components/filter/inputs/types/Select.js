import React, { useRef } from 'react';

const Select = ({ name, text, defaultValue, value, event }) => {
	const select = useRef(value);
	const change = () => {
		event({
			name: name,
			value: select.current.value
		});
	};
	return (
		<div className="form-group">
			<label htmlFor={name}>{text}</label>
			<select
				className="form-control"
				id={name}
				ref={select}
				defaultValue={defaultValue}
				onChange={change}
			>
				{value.map((data) => (
					<option key={data.id} value={data.value}>
						{data.value}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
