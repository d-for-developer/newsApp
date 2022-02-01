import './App.css';
import "@material-tailwind/react/tailwind.css";
import React, { Component } from 'react'
import News from './Components/News';
import Navbar from './Components/Navbar';

export default class App extends Component {
  render() {
    return ( 
      <> 
        <Navbar/>
        <News pageSize={12} country="in" category="science"/>
        </>
      )
  }
}



