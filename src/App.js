import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import ProfValidator from './PropValidator';
import ComponentCycle from './components/ComponentCycle';

class App extends React.Component {  
  render() {     
     return (  
         <div>  
             Default Props Example <button onClick="window.open('./SecondComponent.js')">Click Me</button>
           <h3>Welcome to {this.props.name}</h3>   
           <p className="text-style">Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>          
        
         <FirstComponent/>
         {/* <SecondComponent test="Test Text"/> */}
         {/* <ThirdComponent/> */}
          {/* <ProfValidator/> */}
          <ComponentCycle />
         </div>  
       );  
   }  
}  



export default App;
