// import {} from 'react';
import './App.css';
import Dash from './components/Dash';
import Map from './components/Map';

function App() {
	return (
		<div className='App'>
			<div className='dash'>
				<Dash />
			</div>
			<div className='map'>
				<Map />
			</div>
		</div>
	);
}

export default App;
