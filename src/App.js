import React from 'react';
import Background from './Background/Background'
import Header from './Header/Header'
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
       <Background />
      <Header />
     <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />{/**/}
     
    </div>
  );
}

export default App;
