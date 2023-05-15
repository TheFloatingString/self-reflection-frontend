import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NavigationBar from '../components/NavigationBar';

sessionStorage.setItem("quizStarted", "false");

function HomePage() {
  return (
    <div className='App'>
      <NavigationBar />
      <div>
        <h1>Welcome to the 4Q Quiz</h1>

        <br/><br/>

		<b>PQ</b> (Physical Quotient)		<br/>
		<b>IQ</b> (Intellectual Quotient)	<br/>
		<b>EQ</b> (Emotional Quotient)		<br/>
		<b>SQ</b> (Spiritual Quotient		<br/>

      </div>
    </div>
  );
}

export default HomePage;
