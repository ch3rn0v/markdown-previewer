import React from 'react';
import PropTypes from 'prop-types';

export class MdDisplay extends React.Component {
	render() {
		return (
			<div>
				<p>Markdown preview will be displayed here.</p>
			</div>
		);
	}
}

MdDisplay.propTypes = {
	userInput: PropTypes.string.isRequired
};
