import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Navbar from './Navbar';
import './App.css';

import Pikachu from './Pikachu';
import Cleffa from './Cleffa';



function App() {
  return (
    <main className="App">
      <BrowserRouter>
      < Navbar />
      <Route exact path="/">
        < Pikachu />
      </Route>
      <Route exact path="/cleffa">
        < Cleffa />
      </Route>
      </BrowserRouter>
    </main>
  );
}


export default App;
