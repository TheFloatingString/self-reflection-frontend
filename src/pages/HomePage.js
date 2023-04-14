import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NavigationBar from '../components/NavigationBar';

function HomePage() {
  return (
    <div className='App'>
      <NavigationBar />
      <div>
        <h1>Welcome to the 4Q Quiz</h1>
        <p>This is the home page of my website.</p>
      </div>
    </div>
  );
}

export default HomePage;
