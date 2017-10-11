import React from 'react';
import PropTypes from 'prop-types';

export class MdUserInput extends React.Component {
	onTextAreaChange = (e) => {
		this.props.textAreaChange(e.target.value);
	};

	render() {
		return (
			<div id="user-input">
				<textarea placeholder="Enter your markdown code here." onChange={this.onTextAreaChange} />
			</div>
		);
	}
}

MdUserInput.propTypes = {
	textAreaChange: PropTypes.func.isRequired
};
