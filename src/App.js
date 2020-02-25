import React from 'react';
import {useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import  AppContext from './AppContext';
import Login from './login';
import Navigation from './Navigation';
import Fishepedia from './fishepedia';
import './App.css';

function App() {
  const [globalState,setGlobalState] = useState(
    {
        loggedIn:true
    }
);
const LayoutRoute = ({location,path,exact,component}) => {
  return(
      <div>
      <Navigation location = {location.pathname} /> 
          <Route path = {path} exact = {exact} component ={component} />
      </div>
  );
};
  return (
    <AppContext.Provider value ={[globalState,setGlobalState]}>
      <BrowserRouter>
      
        <Switch>
          <LayoutRoute path="/" exact component ={Login} />
          <LayoutRoute path="/fishepedia"  exact component ={Fishepedia} />
          <LayoutRoute path="/store" component ={Login} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
