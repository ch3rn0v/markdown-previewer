import React from 'react';
import PropTypes from 'prop-types';

export class MdDisplay extends React.Component {
	render() {
		return (
			<div>
				{this.props.userInput.map((renderedMdString, index) => {
					return <p key={index}>{renderedMdString}</p>;
				})}
			</div>
		);
	}
}

MdDisplay.propTypes = {
	userInput: PropTypes.array.isRequired
};
