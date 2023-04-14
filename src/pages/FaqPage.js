import React, { useState } from 'react';
import '../App.css';
import NavigationBar from '../components/NavigationBar';

function FaqPage() {
  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showQuestion3, setShowQuestion3] = useState(false);

  const toggleQuestion1 = () => {
    setShowQuestion1(!showQuestion1);
  };

  const toggleQuestion2 = () => {
    setShowQuestion2(!showQuestion2);
  };

  const toggleQuestion3 = () => {
    setShowQuestion3(!showQuestion3);
  };

  return (
    <div className='App'>
        <NavigationBar />
            <h1>Frequently Asked Questions</h1>
                <h3 onClick={toggleQuestion1} style={{ cursor: 'pointer' }}>Question 1</h3>
                {showQuestion1 && (
                <div style={{ marginTop: '1rem' }}>
                    <p>Answer 1</p>
                </div>
                )}
                <h3 onClick={toggleQuestion2} style={{ cursor: 'pointer', marginTop: '1rem' }}>Question 2</h3>
                {showQuestion2 && (
                <div style={{ marginTop: '1rem' }}>
                    <p>Answer 2</p>
                </div>
                )}
                <h3 onClick={toggleQuestion3} style={{ cursor: 'pointer', marginTop: '1rem' }}>Question 3</h3>
                {showQuestion3 && (
                <div style={{ marginTop: '1rem' }}>
                    <p>Answer 3</p>
                </div>
                )}
    </div>
  );
}

export default FaqPage;
