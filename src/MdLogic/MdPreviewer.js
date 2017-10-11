import React from 'react';

import { MdUserInput } from './MdUserInput';
import { MdDisplay } from './MdDisplay';

// Import text as external file in order to display long default text.
import defaultTextFile from './defaultText.txt';

// Import Markdown-related stuff and initialize it.
import emoji from 'markdown-it-emoji';
import sub from 'markdown-it-sub';
import sup from 'markdown-it-sup';
import MarkdownIt from 'markdown-it';
let md = new MarkdownIt({
	html: true,
	linkify: true,
	typographer: true
})
	.use(emoji)
	.use(sub)
	.use(sup);

export class MdPreviewer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			enteredText: '',
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

	componentDidMount() {
		fetch(defaultTextFile)
			.then((res) => {
				return res.text();
			})
			.then((textFromFile) => {
				this.setState({ enteredText: textFromFile });
				this.renderNewMdPreview();
			});
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
