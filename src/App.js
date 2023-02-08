import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

function App() {
  return (
	<div className="App">
		<h1>Self-Reflection</h1>
	  	<form>
	  	<label>1. How satisifed are you with your outer apperance and facial features?</label>
	  	<p></p>
	  	<Input/>
		<p></p>
		<Button variant="outlined">Submit</Button>

		</form>
	
	</div>
  );
}

export default App;
