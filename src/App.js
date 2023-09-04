// import logo from './logo.svg';
import React from 'react';
import './App.css';
 import VerticalLine from './VerticalLine';
 import HorizontalLine from './HorizontalLine';
 import CircleButtons from './CircleButtons';
function App() {
  
  return (

      <div className="App" >

      <div>
<VerticalLine />
      
       <h1 style={{color: "#00008B"}}><span>Super Pad</span></h1>
       <HorizontalLine />
      
      <p>Dyslexia is a neurodevelopmental disorder that affects reading, spelling, and writing abilities in individuals, despite having average to above-average intelligence. It is characterized by difficulties in processing phonological information, which can lead to challenges in recognizing and decoding written words. People with dyslexia may experience letter and word reversals, difficulty with phonemic awareness, and slower reading speed. Dyslexia is not related to a lack of intelligence or effort; rather, it is a specific learning difference that can be managed and accommodated with appropriate interventions and support. Early detection and tailored educational strategies can empower individuals with dyslexia to overcome challenges and thrive academically and personally, highlighting the importance of raising awareness and understanding of this common learning disability.</p>
      </div>
      <CircleButtons />
    </div>
   
    
    
  );
}

export default App;
