import { useState } from 'react';
import Accordion from './components/Accordion';
import { accordionData } from './utilities/data';

function App() {  
  const {id, title, content} = accordionData;
  
  return (
    <div className="App">
      <h1>React Accordion</h1>
      <div className="accordion">
        {accordionData.map(({title, content, id}) => (
          <Accordion title={title} content={content} key={id} />
        ))}
      </div>
    </div>
  );
}

export default App;
