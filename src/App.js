import './App.css';

const App = () => {
	const name = 'Obaida';

	return (
		<div className="App">
			<h1>Hello, {2 + 2}!</h1>
			{name ? (
				<>{name}</>
			) : (
				<>
					<h1>Test</h1>
					<h2>Test 22</h2>
				</>
			)}
		</div>
	);
};

export default App;
