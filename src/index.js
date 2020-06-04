// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';  
// import App from './App';
// // import PropValidator from './PropValidator';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App name = "Rams Tutorial!!" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import 'bootstrap/dist/css/bootstrap.min.css';  
import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App.js';  
import './index.css';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
// import BootStrapCompoment from './components/BootStrapComponents';  
// import DropDownComponent from './components/DropDownComponent';
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'


const routing = (  
    // <Router>  
    //   <div>  
    //     <h1>React Router Example</h1>  
    //     <Route path="/" component={App} />  
    //     <Route path="/FirstComponent" component={FirstComponent} />  
    //     <Route path="/SecondComponent" component={SecondComponent} />  
    //   </div>  
    // </Router>
    <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/first">About</Link>  
        </li>  
        <li>  
          <Link to="/second">Contact</Link>  
        </li>  
      </ul>  
      <Route exact path="/" component={App} />  
      <Route path="/first" component={FirstComponent} />  
      <Route path="/second" component={SecondComponent} />  
    </div>  
  </Router>    
  )  
  ReactDOM.render(routing, document.getElementById('root')); 
  
// ReactDOM.render(<App />, document.getElementById('root'));  