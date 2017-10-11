import React from 'react';
import PropTypes from 'prop-types';

export const MdUserInput = (props) => {
	const onTextAreaChange = (e) => {
		props.textAreaChange(e.target.value);
	};

	return (
		<div id="user-input">
			<textarea placeholder="Enter your markdown code here." onChange={onTextAreaChange} />
		</div>
	);
};

MdUserInput.propTypes = {
	textAreaChange: PropTypes.func.isRequired
};
