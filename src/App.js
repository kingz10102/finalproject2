import React from 'react';
import Heading from './components_folder/Heading';
import Sneakers from './components_folder/Sneakers';
import Home_Page from './components_folder/Home_Page';
import'./App.css';
// Provider wraps all components 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Socks from './components_folder/Socks';
import Login from './components_folder/Login';


function App()  {
  
  return (
      <div className="App">
        <Router>
          <Heading/>
          {/* using switch method to route through pages */}
          <Switch>
                <Route path="/" component={Home_Page} exact />
                <Route path="/sneakers/" component={Sneakers} /> 
                <Route path="/socks" component={Socks} exact/>
                <Route path="/users" component={Login} exact/>
          </Switch>
        </Router>
      </div>
      
  );
}


export default App;
