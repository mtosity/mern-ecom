import React from 'react';
import {Provider} from 'react-redux';

import './css/tailwind.css';
import './index.css';

import Nav from './components/Nav';
import Banner from './components/Banner';

const App = () => {
  return (
    <div className="w-full">
      <Nav></Nav>
      <Banner/>
    </div>
  );
}

export default App;
