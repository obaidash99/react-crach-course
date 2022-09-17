import './App.css';

const App = () => {
	const Person = (props) => {
		return (
			<>
				<h1>First Name: {props.name}</h1>
				<h2>Last Name: {props.lastName}</h2>
				<h2>Age: {props.age}</h2>
			</>
		);
	};

	return (
		<div className="App">
			<h1>Hello, {2 + 2}!</h1>
			<Person name={'Obaida'} lastName={'Mohammed'} age={23} />
			<Person name={'Hany'} lastName="Shurbaji" age={26} />
		</div>
	);
};

export default App;
