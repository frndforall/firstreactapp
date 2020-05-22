import React, { Component } from 'react';  
class SecondComponent extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "JavaTpoint",    
         class: "10"     
      }  
   }  
   render() {  
      return (  
         <div>  
            <h1>{this.props.test}</h1>
            <JTP jtpProp1 = {this.state.name} jtpProp2 = {this.state.class}/>            
         </div>  
      );  
   }  
}  
class JTP extends React.Component {  
   render() {  
      return (  
          <div>  
              <h1>State & Props Example</h1>  
              <h3>Welcome to {this.props.jtpProp1}</h3>
              <h3>Your class is {this.props.jtpProp2}</h3>  
              <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>  
         </div>    
      );  
   }  
}  
export default SecondComponent; 