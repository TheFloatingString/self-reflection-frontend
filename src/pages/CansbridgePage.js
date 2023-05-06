import React from 'react';
import '../App.css';
import NavigationBar from '../components/NavigationBar';

function CansbridgePage() {
  return (
    <div className='App'>
      <NavigationBar />
      <div style={{padding: '0 2rem'}}>
      <h1>Cansbridge</h1>
      <p>
	  The Cansbridge Fellowship is a unique and highly selective fellowship which selects
	  around 20 of the most ambitious, entrepreneurial, and high-potential university students
	  from across Canada every year. Fellows participate in a week-long bootcamp in 
	  San Francisco, receive $10k to spend for a Summer working in Asia, and join an exceptional
	  and tightly-knit network that lasts for the rest of their lives. The name "Cansbridge"
	  comes from the idea that the fellowship is Canada's "bridge" to Asia and the rest 
	  of the world.
      </p>
      <p>
	  Every year at the bootcamp, the fellows are lucky enough to meet Shifu, a Buddhist monk, 
	  who runs workshops and meditations to help guide the fellows as they pursue their 
	  ambitions.
      </p>
    </div>
    </div>
  );
}

export default CansbridgePage;
