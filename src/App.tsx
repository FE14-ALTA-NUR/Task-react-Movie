import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './pages/DetailMovie';
import { useSelector } from "react-redux";
import {ThemeState} from "../src/redux/Themes";
import Favorit from './pages/Favorit';

const App = () => {
  const thema = useSelector(
    (state: { thema: ThemeState }) => state.thema
  );
  return (
    <div data-theme={thema?.thema}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<MovieDetail />} />
          <Route path="/favorit" element={<Favorit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
