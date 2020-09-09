import React from 'react';
import Heading from './components_folder/Heading';
import Product_Sectional from './components_folder/Product_Sectional';
import Home_Page from './components_folder/Home_Page';
import'./App.css';
// Provider wraps all components 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sneakers from './components_folder/Sneakers';
import Socks from './components_folder/Socks';


function App()  {
  
  return (
      <div className="App">
        <Router>
          <Heading/>
          {/* using switch method to route through pages */}
          <Switch>
                <Route path="/" component={Home_Page} exact />
                <Route path="/sneakers/" component={Product_Sectional} /> 
                <Route path="/socks" component={Socks} exact/>
          </Switch>
        </Router>
      </div>
      
  );
}


export default App;
