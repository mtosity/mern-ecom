import React from 'react';
import {Provider} from 'react-redux';

import './css/tailwind.css';
import './index.css';

import Nav from './components/Nav';

const App = () => {
  return (
    <div className="w-full">
      <Nav></Nav>
    </div>
  );
}

export default App;
