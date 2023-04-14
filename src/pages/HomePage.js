import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to the 4Q Quiz</h1>
        <p>This is the home page of my website.</p>
      </div>
    </div>
  );
}

export default HomePage;
