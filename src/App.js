import './App.css';

const App = () => {
	const Person = () => {
		return (
			<>
				<h1>First Name: Obaida</h1>
				<h2>Last Name: Shurbaji</h2>
				<h2>Age: 23</h2>
			</>
		);
	};

	return (
		<div className="App">
			<h1>Hello, {2 + 2}!</h1>
			<Person />
		</div>
	);
};

export default App;
