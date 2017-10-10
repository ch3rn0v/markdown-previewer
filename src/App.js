import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Markdown Previewer</h1>
				</header>
				<p className="App-intro">TODO: put text area and preview div here.</p>
				<footer>
					<p>MIT License.</p>
					<p>
						Source code available at{' '}
						<a
							href="https://github.com/ch3rn0v/markdown-previewer"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/ch3rn0v/markdown-previewer
						</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
