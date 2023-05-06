import React, { PureComponent } from 'react';
import '../App.css'

import { LineChart, Line, Legend, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

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


let data = JSON.parse(sessionStorage.getItem("graphData"))

function SummaryPage() {
	return (
		<div className='App'>
			<h1>Summary of Results</h1>

	        <LineChart width={1000} height={600} data={data}>
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

export default SummaryPage;


/*            <Line type="monotone" dataKey="emotionalScore" stroke="#9403fc" strokeWidth={2} />
            <Line type="monotone" dataKey="intellectualScore" stroke="#0bb05a" strokeWidth={2} />
            <Line type="monotone" dataKey="spiritualScore" stroke="#fcba03" strokeWidth={2} />
*/