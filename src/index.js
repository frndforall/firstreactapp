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
// import App from './App.js';  
import './index.css';  
import BootStrapCompoment from './components/BootStrapComponents';  
import DropDownComponent from './components/DropDownComponent';
  
ReactDOM.render(<DropDownComponent />, document.getElementById('root'));  