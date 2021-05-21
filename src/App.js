import './App.css';
import Dash from './components/Dash';

function App() {
	return (
		<div className='App'>
			<div className='dash'>
				<Dash />
			</div>
			<div className='map'></div>
		</div>
	);
}

export default App;
