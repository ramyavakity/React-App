import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Footer/>
      <Home/>
      <Faq/>
      </div>
    );
  }
}

export default App;
