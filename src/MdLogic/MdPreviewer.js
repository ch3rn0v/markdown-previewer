import React from 'react';

import { MdUserInput } from './MdUserInput';
import { MdDisplay } from './MdDisplay';
import marked from 'marked';

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

	renderNewMdPreview = () => {
		var newParsedTextArray = [];
		for (var markdownString of this.state.enteredText) {
			newParsedTextArray.push(marked(markdownString));
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
