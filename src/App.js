import { useState } from 'react';
import Accordion from './components/Accordion';
import { accordionData } from './utilities/data';

function App() {  
  const {id, title, content} = accordionData;
  
  return (
    <div className="App">
      <h1>React Accordion</h1>
      <div className="accordion">
        {accordionData.map(({id, title, content}) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
