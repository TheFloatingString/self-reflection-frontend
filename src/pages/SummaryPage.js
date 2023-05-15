import React, { PureComponent } from 'react';
import '../App.css'

import { LineChart, Line, Legend, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const data = [
//   {
//     name: 'Early Childhood',

// 	emotionalScore: 3.9,
//     intellectualScore: 6.1,
//     physicalScore: 3.1,
//     spiritualScore: 5.7,
//   },
//   {
//     name: 'Middle Childhood',

// 	emotionalScore: 3.7,
//     intellectualScore: 5,
//     physicalScore: 5,
//     spiritualScore: 5,
//   },
//   {
//     name: 'Teenage Stage',

// 	emotionalScore: 1.2,
//     intellectualScore: 5.5,
//     physicalScore: 5.2,
//     spiritualScore: 5.9,
//   },
//   {
//     name: 'Older Adolescence',

// 	emotionalScore: 2,
//     intellectualScore: 5.7,
//     physicalScore: 7,
//     spiritualScore: 3.5,
//   },
//   {
//     name: 'Early Adulthood',

// 	emotionalScore: 3,
//     intellectualScore: 5.3,
//     physicalScore: 5.7,
//     spiritualScore: 6,
//   },
//   {
//     name: 'Adulthood',

// 	emotionalScore: 5.1,
//     intellectualScore: 5.6,
//     physicalScore: 5,
//     spiritualScore: 6.3,
//   },
//   {
//     name: 'Middle Age',

// 	emotionalScore: 5,
//     intellectualScore: 5,
//     physicalScore: 5.5,
//     spiritualScore: 6.8,
//   },
//   {
//   	name: 'Senior Years',

// 	emotionalScore: 6,
//     intellectualScore: 6,
//     physicalScore: 5.8,
//     spiritualScore: 7,
//   }
// ];


let quizStarted = sessionStorage.getItem("quizStarted");
let rows = []


if (quizStarted === "true") {

	let data = JSON.parse(sessionStorage.getItem("graphData"))

	console.log(data);

	function createData (
			lifeStage,
			singlePhysicalScore,
			singleEmotionalScore,
			singleIntellectualScore,
			singleSpiritualScore
		) {
		return {
			lifeStage,
			singlePhysicalScore,
			singleEmotionalScore,
			singleIntellectualScore,
			singleSpiritualScore
		}
	}


	for (let i=0; i<data.length; i++) {
		rows.push(
			createData(

				data[i].name,
				data[i].physicalScore,
				data[i].emotionalScore,
				data[i].intellectualScore,
				data[i].spiritualScore

				)
			);
}

}

function SummaryPage() {
	return (
		<div className='App'>
			<h1>Summary of Results</h1>

	        <LineChart width={1000} height={600} data={data}>

	        <Line type="monotone" dataKey="physicalScore" stroke="#fc03df" strokeWidth={2} />
            <Line type="monotone" dataKey="emotionalScore" stroke="#9403fc" strokeWidth={2} />
            <Line type="monotone" dataKey="intellectualScore" stroke="#0bb05a" strokeWidth={2} />
            <Line type="monotone" dataKey="spiritualScore" stroke="#fcba03" strokeWidth={2} />

            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip />


            <XAxis dataKey="name" />
	          <YAxis />
            <Legend />

	        </LineChart>


			<br/> <br/>

			<p>Please take a screenshot of the graph and table, and share the screenshot with Shifu.</p>

			<br/> <br/>


			<TableContainer component={Paper}>
				<Table sx={{minWidth: 30}}>
					<TableHead>
						<TableCell>Life Stage</TableCell>
						<TableCell>Physical Score Average</TableCell>
						<TableCell>Emotional Score Average</TableCell>
						<TableCell>Intellectual Score Average</TableCell>
						<TableCell>Spiritual Score Average</TableCell>
					</TableHead>
					<TableBody>

						{rows.map((row) => (

								<TableRow>

									<TableCell>{row.lifeStage}</TableCell>
									<TableCell>{row.singlePhysicalScore}</TableCell>
									<TableCell>{row.singleEmotionalScore}</TableCell>
									<TableCell>{row.singleIntellectualScore}</TableCell>
									<TableCell>{row.singleSpiritualScore}</TableCell>

								</TableRow>

							))}

					</TableBody>
				</Table>
			</TableContainer>









		</div>


		);
}

export default SummaryPage;


