import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

class App extends React.Component {  
  render() {     
     return (  
         <div>  
             Default Props Example <button>Click Me</button>
           <h3>Welcome to {this.props.name}</h3>   
           <p className="text-style">Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>          
        
         <FirstComponent/>
         <SecondComponent/>
         </div>  
       );  
   }  
}  


export default App;
