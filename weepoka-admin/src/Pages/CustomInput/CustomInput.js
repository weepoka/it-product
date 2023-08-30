import React from 'react';

const CustomInput = (props) => {
	const { type, label, i_id, i_class, inputChangeHandler, value } = props;
	return (
		<div className='form-floating mb-3'>
			<input
				onChange={inputChangeHandler}
				value={value}
				type={type}
				className={`form-control ${i_class}`}
				id={i_id}
				placeholder={label}
				required
			/>
			<label htmlFor={label}>{label}</label>
		</div>
	);
};

export default CustomInput;
