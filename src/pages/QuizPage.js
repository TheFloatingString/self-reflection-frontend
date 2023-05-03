// import logo from './logo.svg';
import '../App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Rating from '@mui/material/Rating';
import NavigationBar from '../components/NavigationBar';
import Question from '../question.js';
import { useState } from 'react';
import { LineChart, Line, Legend, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';













const data = [
	{
	  name: 0,
	  physicalScore: 3.2,
	},
	{
	  name: 1,
	  physicalScore: 5,
	},
	{
	  name: 2,
	  physicalScore: 5.2,
	},
	{
	  name: 3,
  	  physicalScore: 7,
	},
	{
	  name: 4,
	  physicalScore: 5.7,
	},
	{
	  name: 5,
	  physicalScore: 5,
	},
	{
	  name: 6,
	  physicalScore: 5.5,
	},
	{
		name: 7,
	  physicalScore: 5.8,
	}
  ];
  
  







const questionData = require("../questions.json");

let stageList = ["0", "1", "2"];


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
	let currentQuestionIdentifier = (questionData.data.physicalQuotient.internalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	physicalQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.physicalQuotient.externalConditions) {
	let currentQuestion = (questionData.data.physicalQuotient.externalConditions[index].question);
	let currentQuestionIdentifier = (questionData.data.physicalQuotient.externalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	physicalQuotientElementsExternal.push(newQuestionElement);
}

for (const index in questionData.data.intellectualQuotient.internalConditions) {
	let currentQuestion = (questionData.data.intellectualQuotient.internalConditions[index].question);
	let currentQuestionIdentifier = (questionData.data.intellectualQuotient.internalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	intellectualQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.intellectualQuotient.externalConditions) {
	let currentQuestion = (questionData.data.intellectualQuotient.externalConditions[index].question);
	let currentQuestionIdentifier = (questionData.data.intellectualQuotient.externalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	intellectualQuotientElementsExternal.push(newQuestionElement);
}

for (const index in questionData.data.emotionalQuotient.internalConditions) {
	let currentQuestion = (questionData.data.emotionalQuotient.internalConditions[index].question);
	let currentQuestionIdentifier = (questionData.data.emotionalQuotient.internalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	emotionalQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.emotionalQuotient.externalConditions) {
	let currentQuestion = (questionData.data.emotionalQuotient.externalConditions[index].question);
	let currentQuestionIdentifier = (questionData.data.emotionalQuotient.externalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	emotionalQuotientElementsExternal.push(newQuestionElement);
}

for (const index in questionData.data.spiritualQuotient.internalConditions) {
	let currentQuestion = (questionData.data.spiritualQuotient.internalConditions[index].question);
	let currentQuestionIdentifier = (questionData.data.spiritualQuotient.internalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	spiritualQuotientElementsInternal.push(newQuestionElement);
}

for (const index in questionData.data.spiritualQuotient.externalConditions) {
	let currentQuestion = (questionData.data.spiritualQuotient.externalConditions[index].question);
	let currentQuestionIdentifier = (questionData.data.spiritualQuotient.externalConditions[index].suffixId);
	let newQuestionElement = <Question question={currentQuestion} questionIdentifier={currentQuestionIdentifier} />
	spiritualQuotientElementsExternal.push(newQuestionElement);
}


console.log("test");


let counter = 0

function returnAverage(valuesList) {
	let listSum = 0.0;
	for (let i=0; i<valuesList.length; i++) {
		listSum += valuesList[i];
	}
	return listSum/valuesList.length
}


function QuizPage() {

	const [physicalLog, setPhysicalLog] = useState([]);


	const [physicalScore, setPhysicalScore] = useState(0);
	const [intellectualScore, setIntellectualScore] = useState(0);
	const [emotionalScore, setEmotionalScore] = useState(0);
	const [spiritualScore, setSpiritualScore] = useState(0);

	let [graphData, setGraphData] = useState([]);

		function handleSubmit(e) {

			console.log("calling handleSubmit()");

			e.preventDefault();
			const form = e.target;
			const formData = new FormData(form);

			const formJson = Object.fromEntries(formData.entries());

			console.log(formJson);

			let physicalScoresList = [
				parseFloat(formJson["physical-internal-1"]),
				parseFloat(formJson["physical-internal-2"]),
				parseFloat(formJson["physical-internal-3"]),
				parseFloat(formJson["physical-external-1"]),
				parseFloat(formJson["physical-external-2"]),
				parseFloat(formJson["physical-external-3"]),
				];

			let intellectualScoresList = [
				parseFloat(formJson["intellectual-internal-1"]),
				parseFloat(formJson["intellectual-internal-2"]),
				parseFloat(formJson["intellectual-internal-3"]),
				parseFloat(formJson["intellectual-external-1"]),
				parseFloat(formJson["intellectual-external-2"]),
				parseFloat(formJson["intellectual-external-3"]),
				];

			let emotionalScoresList = [
				parseFloat(formJson["emotional-internal-1"]),
				parseFloat(formJson["emotional-internal-2"]),
				parseFloat(formJson["emotional-internal-3"]),
				parseFloat(formJson["emotional-external-1"]),
				parseFloat(formJson["emotional-external-2"]),
				parseFloat(formJson["emotional-external-3"]),
				];

			let spiritualScoresList = [
				parseFloat(formJson["spiritual-internal-1"]),
				parseFloat(formJson["spiritual-internal-2"]),
				parseFloat(formJson["spiritual-internal-3"]),
				parseFloat(formJson["spiritual-internal-4"]),
				parseFloat(formJson["spiritual-external-1"]),
				parseFloat(formJson["spiritual-external-2"]),
				];

			const physicalAverageScore = returnAverage(physicalScoresList);
			const intellectualAverageScore = returnAverage(intellectualScoresList);
			const emotionalAverageScore = returnAverage(emotionalScoresList);
			const spiritualAverageScore = returnAverage(spiritualScoresList);

			setPhysicalScore(Math.round(physicalAverageScore*100)/100)
			setIntellectualScore(Math.round(intellectualAverageScore*100)/100);
			setEmotionalScore(Math.round(emotionalAverageScore*100)/100);
			setSpiritualScore(Math.round(spiritualAverageScore*100)/100);

			physicalLog.push(physicalAverageScore);
			console.log(physicalLog);

			graphData.push({
				name: counter,
				physicalScore: physicalAverageScore
			})


			setGraphData([
				{
				  name: 0,
				  physicalScore: 6,
				},
				{
				  name: 1,
				  physicalScore: 5,
				},
				{
				  name: 2,
				  physicalScore: 5.2,
				},
				{
				  name: 3,
					physicalScore: 7,
				},
				{
				  name: 4,
				  physicalScore: 5.7,
				},
				{
				  name: 5,
				  physicalScore: 5,
				},
				{
				  name: 6,
				  physicalScore: 5.5,
				},
				{
					name: 7,
				  physicalScore: 5.8,
				}
			  ]);


			graphData[counter] = {
				name: counter,
				physicalScore: physicalAverageScore
			}
			  
			 


			counter++;

			console.log(graphData);


		}


  return (
	<div className="App">
        <NavigationBar />
		<h1>Self-Reflection</h1>

		<h2>Current stage: {stageList[1]}</h2>

	  	<form onSubmit={handleSubmit}>

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



		<Button variant="outlined" type="submit">Submit</Button>

		</form>


		<p>Physical score: {physicalScore}</p>
		<p>Intellectual score: {intellectualScore}</p>
		<p>Emotional score: {emotionalScore}</p>
		<p>Spiritual score: {spiritualScore}</p>
	

		<h1>Summary of Results</h1>

		<LineChart width={1000} height={600} data={graphData}>
		<Line type="monotone" dataKey="physicalScore" stroke="#fc03df" strokeWidth={2} />

		<CartesianGrid strokeDasharray="3 3" />

		<Tooltip />


		<XAxis dataKey="name" />
		<YAxis />
		<Legend />

		</LineChart>



	</div>
  );
}

export default QuizPage;
