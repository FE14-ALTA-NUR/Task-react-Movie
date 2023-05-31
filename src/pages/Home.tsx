// import React from 'react'
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import { useSelector } from "react-redux";
import {ThemeState} from "../redux/Themes";

const Home = () => {
    const thema = useSelector(
        (state: { thema: ThemeState }) => state.thema
      );
      console.log(thema?.thema)
      return (
    
         <div data-theme={thema?.thema}>
          <Header/>
          <MovieList />
        </div>
      );
}

export default Home