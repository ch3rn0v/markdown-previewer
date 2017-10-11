import React from 'react';
import PropTypes from 'prop-types';

export const MdDisplay = (props) => {
	const createMarkUp = () => {
		return { __html: props.userInput };
	};

	return <div id="md-preview" dangerouslySetInnerHTML={createMarkUp()} />;
};

MdDisplay.propTypes = {
	userInput: PropTypes.string.isRequired
};
