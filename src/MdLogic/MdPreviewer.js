import React from 'react';

import { MdUserInput } from './MdUserInput';
import { MdDisplay } from './MdDisplay';

export class MdPreviewer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			enteredText: [],
			parsedText: [ 'Markdown preview will appear here.' ]
		};
	}

	onTextAreaChange = (currentTextAreaContents) => {
		this.setState({ enteredText: currentTextAreaContents.split('\n') }, this.renderNewMdPreview);
	};

	parseMdString = (markdownString) => {
		var result = markdownString;
		// TODO: parse text
		return result;
	};

	renderNewMdPreview = () => {
		var newParsedTextArray = [];
		for (var markdownString of this.state.enteredText) {
			newParsedTextArray.push(this.parseMdString(markdownString));
		}
		this.setState({ parsedText: newParsedTextArray });
	};

	render() {
		return (
			<div id="md-wrapper">
				<MdUserInput textAreaChange={this.onTextAreaChange} />
				<MdDisplay userInput={this.state.parsedText} />
			</div>
		);
	}
}
