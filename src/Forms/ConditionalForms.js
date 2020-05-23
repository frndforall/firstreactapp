import React, { Component } from 'react';  
class ConditionalComponent extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
           isLoggedin : false
      }  
      this.updateLoggedin = this.updateLoggedin.bind(this);
   }  

   updateLoggedin() {
       console.log(' Button is clicked from child using props')
       this.setState({
        isLoggedIn : !this.state.isLoggedIn
       });
   }
   render() { 
    const isLoggedIn = this.state.isLoggedIn;  
      return (  
         <>  
             <div>  
                Welcome {isLoggedIn ? 'Back' : 'Please login first'}
                <Example click ={this.updateLoggedin}/>
                </div>        
         </>  
      );  
   }  
}  

function Example(props)   
{   
    return(<div>   
            {   
                <button onClick={props.click}>Click ME</button>
            }   
           </div>   
        );   
}   

export default ConditionalComponent;