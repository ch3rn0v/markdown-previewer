import React from 'react';

import { MdUserInput } from './MdUserInput';
import { MdDisplay } from './MdDisplay';
import marked from 'marked';

export class MdPreviewer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			enteredText: [
				'# Welcome to Markdown Previewer!',
				'Enter your markdown text __here__ and you will see its preview on the _right_.'
			],
			parsedText: []
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

	componentWillMount() {
		this.renderNewMdPreview();
	}

	render() {
		return (
			<div id="md-wrapper">
				<MdUserInput textAreaChange={this.onTextAreaChange} textAreaValue={this.state.enteredText.join('\n')} />
				<MdDisplay userInput={this.state.parsedText} />
			</div>
		);
	}
}
