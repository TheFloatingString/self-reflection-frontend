// import logo from './logo.svg';
import '../App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Rating from '@mui/material/Rating';
import NavigationBar from '../components/NavigationBar';
import Question from '../question.js';

const questionData = require("../questions.json");


for (const categoryProperty in questionData.data){
	// console.log(`${categoryProperty}: ${questionData.data[categoryProperty]}`);
}

const physicalQuotientElementsInternal = [];
const physicalQuotientElementsExternal = [];

const intellectualQuotientElementsInternal = [];
const intellectualQuotientElementsExternal = [];

const emotionalQuotientElementsInternal = [];
const emotionalQuotientElementsExternal = [];

const spiritualQuotientElementsInternal = [];
const spiritualQuotientElementsExternal = [];

for (const index in questionData.data.physicalQuotient.internalConditions) {
	let currentQuestion = (questionData.data.physicalQuotient.internalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	physicalQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.physicalQuotient.externalConditions) {
	let currentQuestion = (questionData.data.physicalQuotient.externalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	physicalQuotientElementsExternal.push(newQuestionElement);
}

for (const index in questionData.data.intellectualQuotient.internalConditions) {
	let currentQuestion = (questionData.data.intellectualQuotient.internalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	intellectualQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.intellectualQuotient.externalConditions) {
	let currentQuestion = (questionData.data.intellectualQuotient.externalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	intellectualQuotientElementsExternal.push(newQuestionElement);
}

for (const index in questionData.data.emotionalQuotient.internalConditions) {
	let currentQuestion = (questionData.data.emotionalQuotient.internalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	emotionalQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.emotionalQuotient.externalConditions) {
	let currentQuestion = (questionData.data.emotionalQuotient.externalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	emotionalQuotientElementsExternal.push(newQuestionElement);
}

for (const index in questionData.data.spiritualQuotient.internalConditions) {
	let currentQuestion = (questionData.data.spiritualQuotient.internalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	spiritualQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.spiritualQuotient.externalConditions) {
	let currentQuestion = (questionData.data.spiritualQuotient.externalConditions[index].question);
	let newQuestionElement = <Question question={currentQuestion} />
	spiritualQuotientElementsExternal.push(newQuestionElement);
}


function QuizPage() {
  return (
	<div className="App">
        <NavigationBar />
		<h1>Self-Reflection</h1>

	  	<form>

		<h3>Physical Quotient Internal</h3>

	  	{physicalQuotientElementsInternal}

		<h3>Physical Quotient External</h3>

	  	{physicalQuotientElementsExternal}


		<h3>Intellectual Quotient Internal</h3>

	  	{intellectualQuotientElementsInternal}

		<h3>Intellectual Quotient External</h3>

	  	{intellectualQuotientElementsExternal}


		<h3>Emotional Quotient Internal</h3>

	  	{emotionalQuotientElementsInternal}

		<h3>Emotional Quotient External</h3>

	  	{emotionalQuotientElementsExternal}


		<h3>Spiritual Quotient Internal</h3>

	  	{spiritualQuotientElementsInternal}

		<h3>Spiritual Quotient External</h3>

	  	{spiritualQuotientElementsExternal}



		<Button variant="outlined">Submit</Button>

		</form>
	
	</div>
  );
}

export default QuizPage;
