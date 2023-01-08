import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './components/home';
import Spider from './components/header';
import { Filter } from './components/Filter'

import { Products } from './components/Products'
import { setFilter } from './redux/slices/filterSlice';





function App() {
  return (
    <div className="App">
      <Filter />
      <Products />
    </div>
  );
}

export default App;
