import React from 'react';
import Tabs from './components/Tabs'; 
import './App.css'

const tabItems = [
  {
    label: 'Tab 1',
    content: 'Tab 1 content is showing here',
  },
  {
    label: 'Tab 2',
    content: 'Tab 2 content is showing here',
  },
  {
    label: 'Tab 3',
    content: 'Tab 3 content is showing here',
  },
];

function App() {
  return (
    <div>
      
      <Tabs items={tabItems} />
    </div>
  );
}

export default App;
