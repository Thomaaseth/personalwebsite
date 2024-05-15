import './App.css';
import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">   
      <Header />
      <div className='main-content'>
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
