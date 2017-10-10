import React from 'react';
import PropTypes from 'prop-types';

export class MdUserInput extends React.Component {
	render() {
		return (
			<div>
				<textarea placeholder="Enter your markdown code here." />
			</div>
		);
	}
}

MdUserInput.propTypes = {
	textAreaChange: PropTypes.func.isRequired
};
