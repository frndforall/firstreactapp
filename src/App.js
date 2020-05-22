import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
// import SecondComponent from './SecondComponent';
// import ThirdComponent from './ThirdComponent';
// import ProfValidator from './PropValidator';
// import ComponentCycle from './components/ComponentCycle';
// import FirstForm from './Forms/first_forms';
import SecondForm from './Forms/SecondForm';
import ThirdForm from './Forms/ThirdForm';
import Handling from './Forms/EventHandling';

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
          {/* <ComponentCycle /> */}
          <ThirdForm name="I am doing props pass"/>
          <Handling />
         </div>  
       );  
   }  
}  



export default App;
