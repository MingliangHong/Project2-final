import React from 'react';
import Home from './Home';
import {  BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import Detailpage from './Detailpage';
import Navbar from './Navbar';
import Moviepage from './Moviepage';
import { MovieProvider } from './Moviecontext';

function App() {
  return (
    <MovieProvider>
      <HashRouter>
        <div className='App'>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/detailpage/:id" element={<Detailpage></Detailpage>}></Route>
            <Route path="/movies" element={<Moviepage></Moviepage>}></Route>
          </Routes>
        </div>
      </HashRouter>
    </MovieProvider>
  );
}

export default App;
