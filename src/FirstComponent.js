import React, { Component } from 'react';  
class FirstComponent extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: true,
                        increment: 1 };  
    
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      this.increaseValue = this.increaseValue.bind(this);
      this.showData = this.showData.bind(this);
      this.forceUpdateState = this.forceUpdateState.bind(this);
      } 

      toggleDisplayBio(){  
            this.setState({displayBio: !this.state.displayBio});  
        }

        increaseValue() {
            this.setState({increment: (this.state.increment+1)})
        }

        showData = () => {
            console.log(this.state.displayBio +' is bio data and '+ this.state.increment+ ' is increment value' );
        }

        forceUpdateState() {
            console.log('force update is called');
            this.forceUpdate();
        }


      render() {  
          const bio = this.state.displayBio ? (  
              <div>  
                  <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
                  <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>  
              ) : (  
                <div>  
                    <button onClick={this.toggleDisplayBio}> Read More </button>  
                </div>  
                 )  ;  
              return (  
                  <div>  
                      <h1> Welcome to JavaTpoint!! </h1>  
                      { bio }

                      <h3>Random number: {Math.random()}</h3>  
                      Current Value for increment counter is {this.state.increment} <button onClick={this.increaseValue}>Increment</button> <br/>
                      <button onClick={this.showData}>ShowData</button><br/>

                      

                      <button onClick={this.forceUpdateState}>Force Update</button>
                  </div>  
              );  
     }  
}  

export default FirstComponent;  