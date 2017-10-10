import React from 'react';

import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { MdPreviewer } from '../MdLogic/MdPreviewer';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<MdPreviewer />
				<Footer />
			</div>
		);
	}
}

export default App;
