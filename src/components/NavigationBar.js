import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavigationBar() {
  return (
    <div>
      <nav>
        <ul class="ul-navbar">
          <li class="li-navbar"><Link to="/">Home</Link></li>
          <li class="li-navbar"><Link to="/quiz">Take the Quiz</Link></li>
          <li class="li-navbar"><Link to="/translated-scripts">Buddhist Sources</Link></li>
          <li class="li-navbar"><Link to="/cansbridge">Cansbridge</Link></li>
          <li class="li-navbar"><Link to="/faq">Questions for Pondering</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
