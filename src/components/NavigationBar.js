import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavigationBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Take the Quiz</Link></li>
          <li><Link to="/translated-scripts">Translated Scripts</Link></li>
          <li><Link to="/cansbridge">Cansbridge</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
