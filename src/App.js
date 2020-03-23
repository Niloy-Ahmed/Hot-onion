import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Shop from './component/Shop/Shop';
import{
  BrowserRouter as Router ,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import Luncher from './component/luncher/Luncher';
import Lunch from './component/Lunch/Lunch';
import Dinner from './component/Dinner/Dinner';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Button from './component/button/Button';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/Breakfast">
          <Shop></Shop>
          </Route>
          <Route path="/Lunch">
          <Lunch></Lunch>
          </Route>
          <Route path="/Dinner">
          <Dinner></Dinner>
          </Route>
          <Route path="/Product/:ProductKey">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>

         
       
    
    </div>
  );
}

export default App;
