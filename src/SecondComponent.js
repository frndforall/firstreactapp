import React, { Component } from 'react';  
class SecondComponent extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "JavaTpoint",    
         class: "10",
         toggle: false    
      }  
   }  
   render() {  
      return (  
         <div>  
            <h1>{this.props.test}</h1>
            <h1>{this.state.name} is the value</h1>
            <JTP jtpProp1 = {this.state.name} jtpProp2 = {this.state.class} toggleHandler={this.toggleHandler} onChange = {this.nameChangedHandler} toggle = {this.state.toggle}/>            
         </div>  
      );  
   }  

   toggleHandler = () => {
      const doesshow = this.state.toggle;
      this.setState({
         toggle: !doesshow
      });
   }

   nameChangedHandler = (event) =>{
      this.setState({
         name: event.target.value
      });
   }


}  
class JTP extends React.Component {  
   render() {  
      let details = null;

      if(this.props.toggle) {
         details = (<div>  
         <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>  
         <input  type = "text" value={this.props.jtpProp1} onChange={this.props.onChange}/>
         </div>)
      }

      return (  
          <div className ="Second">  
              <h1>State & Props Example</h1>  
              <h3>Welcome to {this.props.jtpProp1}</h3>
              <h3>Your class is {this.props.jtpProp2}</h3>
              <button onClick={this.props.toggleHandler}>Toggle</button>
              {details}

              
         </div>    
      );  
   }  
}  
export default SecondComponent; 