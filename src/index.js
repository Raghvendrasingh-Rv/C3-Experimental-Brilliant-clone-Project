import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter ,Route } from 'react-router-dom';
import Warmup from './MyComponent/Warmup'
import Header from './MyComponent/Header';



const Main  = ()=>{
   return(
    <BrowserRouter>
    <Header />
    <Route exact path="/" component={App} />
    <Route exact path="/Warmup" component={Warmup} />
  </BrowserRouter>
   )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
