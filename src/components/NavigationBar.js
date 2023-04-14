import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#e5e5e5', padding: '1rem' }}>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}><Link to="/" style={{ color: 'black', fontWeight: 'bold' }}>Home</Link></li>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}><Link to="/quiz" style={{ color: 'black', fontWeight: 'bold' }}>Take the Quiz</Link></li>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}><Link to="/translated-scripts" style={{ color: 'black', fontWeight: 'bold' }}>Translated Scripts</Link></li>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}><Link to="/cansbridge" style={{ color: 'black', fontWeight: 'bold' }}>Cansbridge</Link></li>
          <li style={{ marginRight: '1rem', fontSize: '1.2rem' }}><Link to="/faq" style={{ color: 'black', fontWeight: 'bold' }}>FAQ</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
