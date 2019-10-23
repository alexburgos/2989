import React from 'react';
import logo from './logo.png';
import './App.css';
import SearchForm from './components/SearchForm';
import { useFetchBreedsHook } from './utils/hooks';

const App = () => {
	const { suggestions, error } = useFetchBreedsHook();

	if (error) return <div>{error}</div>;

	return (
		<div className="App">
			<header className="App__header">
				<img src={logo} alt="hm-logo" />
				<h1>Front End Task</h1>
			</header>

			<section className="App__question">
				<h3>CSS Button</h3>
				<button>Delete</button>
			</section>

			<section className="App__question">
				<h3>Fetch a Random Dog</h3>
				<SearchForm suggestions={suggestions} />
			</section>
		</div>
	);
};

export default App;

