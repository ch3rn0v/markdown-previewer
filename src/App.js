import React from 'react';

import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<p className="app-intro">TODO: put text area and preview div here.</p>
				<Footer />
			</div>
		);
	}
}

export default App;
