import '../App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Rating from '@mui/material/Rating';
import Divider from "@mui/material/Divider";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



import NavigationBar from '../components/NavigationBar';
import Question from '../question.js';
import { useState } from 'react';
import { LineChart, Line, Legend, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";

import { redirect } from "react-router-dom";

const lifeStages = [
	"Early Childhood",
	"Middle Childhood",
	"Teenage Stage",
	"Older Adolescence",
	"Early Adulthood"
];

const ageRanges = [
	"0-7",
	"7-12",
	"12-17",
	"17-21",
	"21-30"
];



const data = [];
  
  
const questionData = require("../questions.json");

const physicalQuotientElementsInternal = [];
const physicalQuotientElementsExternal = [];

const intellectualQuotientElementsInternal = [];
const intellectualQuotientElementsExternal = [];

const emotionalQuotientElementsInternal = [];
const emotionalQuotientElementsExternal = [];

const spiritualQuotientElementsInternal = [];
const spiritualQuotientElementsExternal = [];


// Populating question components

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


let counter = 0

function returnAverage(valuesList) {
	let listSum = 0.0;
	for (let i=0; i<valuesList.length; i++) {
		listSum += valuesList[i];
	}
	return listSum/valuesList.length
}

let summaryComponent = "Let's begin."


function displaySummary(lifeStage, physicalScore, intellectualScore, emotionalScore, spiritualScore) {
	return(

		<div>
			<b>Previous life stage</b> {lifeStage} <br/>
			<b>Physical score</b>: {physicalScore} <br/>
			<b>Intellectual score</b>: {intellectualScore} <br/>
			<b>Emotional score</b>: {emotionalScore} <br/>
			<b>Spiritual score</b>: {spiritualScore}

		</div>

		);
}


function QuizPage() {

	const [physicalLog, setPhysicalLog] = useState([]);


	const [physicalScore, setPhysicalScore] = useState(0);
	const [intellectualScore, setIntellectualScore] = useState(0);
	const [emotionalScore, setEmotionalScore] = useState(0);
	const [spiritualScore, setSpiritualScore] = useState(0);


	const [currentStage, setCurrentStage] = useState(lifeStages[counter]);
	const [currentAgeRange, setCurrentAgeRange] = useState(ageRanges[counter]);

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

			// setPhysicalScore(Math.round(physicalAverageScore*100)/100)
			// setIntellectualScore(Math.round(intellectualAverageScore*100)/100);
			// setEmotionalScore(Math.round(emotionalAverageScore*100)/100);
			// setSpiritualScore(Math.round(spiritualAverageScore*100)/100);

			const physicalScoreRounded = Math.round(physicalAverageScore*100)/100;
			const intellectualScoreRounded = Math.round(intellectualAverageScore*100)/100;
			const emotionalScoreRounded = Math.round(emotionalAverageScore*100)/100;
			const spiritualScoreRounded = Math.round(spiritualAverageScore*100)/100;


			graphData.push({
				name: lifeStages[counter],
				physicalScore: physicalScoreRounded,
				intellectualScore: intellectualScoreRounded,
				emotionalScore: emotionalScoreRounded,
				spiritualScore: spiritualScoreRounded
			});


			sessionStorage.setItem("graphData", JSON.stringify(graphData));

			if (counter === 4) {
				console.log("redirecting to /summary");
				window.location.href = "/summary";
			}

			let quizStarted = sessionStorage.getItem("quizStarted");
			if (quizStarted === "false") {
				sessionStorage.setItem("quizStarted", "true");
			}


			// rendering for next round:

			setCurrentStage(lifeStages[counter+1]);
			setCurrentAgeRange(ageRanges[counter+1]);
			

			// scroll to top
			const element = document.getElementById("self-reflection-title");
			if (element) {
				element.scrollIntoView( {behavior: 'smooth'} );
			}

			if (counter > -1 ) {
				summaryComponent = displaySummary(
					lifeStages[counter], 
					physicalScoreRounded, 
					intellectualScoreRounded, 
					emotionalScoreRounded, 
					spiritualScoreRounded
					);
				console.log(summaryComponent);
			}

			// increment counter

			counter++;

			console.log();
			console.log();

		}


  return (
	<div className="App">
        <NavigationBar />
		<h1 id="self-reflection-title">Self-Reflection</h1>

		<center>	
			<Card sx={{ width: 350 }}>
				<CardContent>
					<Typography>
								<p>「欲知前世因，今生受者是；<br/>
								欲知未來果，今生作者是。」</p>
								<p>"To know the causes of your past lives, look at your current circumstances. <br/>
								To know the consequences of your future lives, look at your current actions." </p>
					</Typography>
				</CardContent>
			</Card>

			<br />

			
			<h3>Scoring Guide</h3>

			<Box>

				<Grid container spacing={3}>
					<Grid item xs={4}>
						<b>1 star:</b> fully dissatisfied
					</Grid>
					<Grid item xs={4}>
						<b>4 stars:</b> acceptable
					</Grid>
					<Grid item xs={4}>
						<b>7 stars:</b> fully satisfied
					</Grid>
				</Grid>

			</Box>

			<br />

			<h3>Life Stages</h3>


			Early Childhood (0-7) <br/>
			Middle Childhood (7-12) <br/>
			Teenage Stage (12-17)<br/>
			Older Adolescence (17-21)<br/>
			Early Adulthood (21-30)<br/>

			<br/>


			<Divider />


		</center>


		<br/ >

		{ summaryComponent }

		<br/ >
		<br/ >


		<Divider />

		<h2>Current stage: {currentStage}</h2>
		<h3>Age range: {currentAgeRange} years old</h3>

		<Divider />

	  	<form onSubmit={handleSubmit}>

		<h3>Physical Quotient: Internal</h3>

	  	{physicalQuotientElementsInternal}

		<h3>Physical Quotient: External</h3>

	  	{physicalQuotientElementsExternal}

	  	<Divider />

		<h3>Intellectual Quotient: Internal</h3>

	  	{intellectualQuotientElementsInternal}

		<h3>Intellectual Quotient: External</h3>

	  	{intellectualQuotientElementsExternal}

	  	<Divider />

		<h3>Emotional Quotient: Internal</h3>

	  	{emotionalQuotientElementsInternal}

		<h3>Emotional Quotient: External</h3>

	  	{emotionalQuotientElementsExternal}

	  	<Divider />

		<h3>Spiritual Quotient: Internal</h3>

	  	{spiritualQuotientElementsInternal}

		<h3>Spiritual Quotient: External</h3>

	  	{spiritualQuotientElementsExternal}



	  	<h5>Please complete the form for the following life stage, after clicking 'Submit'.</h5>


		<Button variant="outlined" type="submit">Submit</Button>

		</form>


		<br/><br/>

	</div>
  );
}

export default QuizPage;
