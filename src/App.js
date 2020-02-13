import React from 'react';
import Login from './login';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
        <div className = "app_body">
          <Login />
           
        </div>
    </div>
  );
}

export default App;
