import React from 'react';
import PropTypes from 'prop-types';

export const MdUserInput = (props) => {
	const onTextAreaChange = (e) => {
		props.textAreaChange(e.target.value);
	};

	return (
		<div id="user-input">
			<textarea
				id="md-source-textarea"
				placeholder="Enter your markdown code here."
				onChange={onTextAreaChange}
				value={props.textAreaValue}
			/>
		</div>
	);
};

MdUserInput.propTypes = {
	textAreaChange: PropTypes.func.isRequired,
	textAreaValue: PropTypes.string.isRequired
};
