import React from 'react';
import './CircleButtons.css';
function CircleButtons() {

return (
  
    <div className="circle-buttons-container">
        <div className="circle-button-row">
          <div className="circle-button" >
            <button>Button 1</button>
            <h4>Light Mode</h4>
          </div>
          <div className="circle-button"  >
            <button >Button 2</button>
            <h4>Dark mode</h4>
          </div>
        </div>
        <div className="circle-button-row">
          <div className="circle-button">
            <button>Button 3</button>
            <h4>Differ</h4>
          </div>
          <div className="circle-button">
            <button>Button 4</button>
            <h4>Font Type</h4>
          </div>
        </div>
        <div className="circle-button-row">
          <div className="circle-button">
            <button>Button 5</button>
          <h4>Read Loud</h4>
          </div>
          <div className="circle-button">
            <button>Button 6</button>
            <h4>Spacing</h4>
          </div>
        </div>
        <div className="circle-button-row">
          <div className="circle-button">
            <button>Button 7</button>
            <h4>Slow Reveal</h4>
          </div>
          <div className="circle-button">
            <button>Button 8</button>
            <h4>L-Cursor</h4>
          </div>
          </div>
          <div className="circle-button-row">
            <div className="circle-button">
            <button>Button 9</button>
            <h4>Increase</h4>
          </div>
          <div className="circle-button">
            <button>Button 10</button>
            <h4>Decrease</h4>
          </div>
          </div>
          
        </div>
      

      
    );
  }

  export default CircleButtons;

