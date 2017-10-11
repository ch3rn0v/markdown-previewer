import React from 'react';

import { MdUserInput } from './MdUserInput';
import { MdDisplay } from './MdDisplay';
import MarkdownIt from 'markdown-it';
let md = new MarkdownIt({
	html: true,
	linkify: true,
	typographer: true
});

export class MdPreviewer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			enteredText:
				'# Welcome to Markdown Previewer!\nEnter your markdown text __here__ and you will see its preview on the _right_.',
			parsedText: ''
		};
	}

	onTextAreaChange = (currentTextAreaContents) => {
		this.setState({ enteredText: currentTextAreaContents }, this.renderNewMdPreview);
	};

	renderNewMdPreview = () => {
		var newParsedText = md.render(this.state.enteredText);
		this.setState({ parsedText: newParsedText });
	};

	componentWillMount() {
		this.renderNewMdPreview();
	}

	render() {
		return (
			<div id="md-wrapper">
				<MdUserInput textAreaChange={this.onTextAreaChange} textAreaValue={this.state.enteredText} />
				<MdDisplay userInput={this.state.parsedText} />
			</div>
		);
	}
}
