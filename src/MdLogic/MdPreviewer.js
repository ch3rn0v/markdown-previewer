import React from 'react';

import { MdUserInput } from './MdUserInput';
import { MdDisplay } from './MdDisplay';

export class MdPreviewer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			enteredText: [],
			parsedText: ''
		};
	}

	onTextAreaChange = (currentTextAreaContents) => {
		// TODO: parse text area contents
		// update state
		// update MdDisplay
	};

	render() {
		return (
			<div>
				<MdUserInput textAreaChange={this.onTextAreaChange} />
				<MdDisplay userInput={this.state.parsedText} />
			</div>
		);
	}
}
