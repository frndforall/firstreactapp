import React, { Component } from 'react';  
class ThirdForm extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personGoing: true,  
            numberOfPersons: 5  
        };  
        this.handleInputChange = this.handleInputChange.bind(this);  
   }  

   componentDidUpdate() {
    console.log(this.state.numberOfPersons+ " has been changed and the check box is " + this.state.personGoing );
   }
   handleInputChange(event) {  
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value
       });  
       
  }  
  render() {  
      return (  
          <form>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  
             

             Number of persons that are attending are {this.state.numberOfPersons} and are they going {this.state.personGoing} and props value is {this.props.name}
         </form>  
     );  
  }  
}  
export default ThirdForm;  