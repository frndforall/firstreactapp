import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
// import SecondComponent from './SecondComponent';
// import ThirdComponent from './ThirdComponent';
// import ProfValidator from './PropValidator';
// import ComponentCycle from './components/ComponentCycle';
// import FirstForm from './Forms/first_forms';
// import SecondForm from './Forms/SecondForm';
import ThirdForm from './Forms/ThirdForm';
import Handling from './Forms/EventHandling';
import ConditionalComponent from './Forms/ConditionalForms';
import BootStrapComponent from './components/BootStrapComponents'
// import ListWithKeys from './Lists/ListWithKeys';

class App extends React.Component {  
  render() {     
     return (  
         <div>  
             Default Props Example <button onClick="window.open('./SecondComponent.js')">Click Me</button>
           <h3>Welcome to {this.props.name}</h3>   
           {/* <p className="text-style">Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>           */}
        
         {/* <FirstComponent/> */}
         {/* <SecondComponent test="Test Text"/> */}
         {/* <ThirdComponent/> */}
          {/* <ProfValidator/> */}
          {/* <ComponentCycle /> */}
          {/* <ThirdForm name="I am doing props pass"/>
          <Handling /> */}
          <ConditionalComponent />
          <BootStrapComponent />
          {/* <ListWithKeys /> */}
         </div>  
       );  
   }  
}  



export default App;

// import React, { Component } from 'react';  
// import './App.css';
// import { TransitionGroup  } from 'react-transition-group';  
  
// class App extends React.Component {  
//     constructor(props) {  
//     super(props);  
//     this.state = {items: ['Blockchain', 'ReactJS', 'TypeScript', 'JavaTpoint']};  
//     this.handleAdd = this.handleAdd.bind(this);  
//   }  
  
//   handleAdd() {  
//     const newItems = this.state.items.concat([  
//       prompt('Enter Item Name')  
//     ]);  
//     this.setState({items: newItems});  
//   }  
  
//   handleRemove(i) {  
//     let newItems = this.state.items.slice();  
//     newItems.splice(i, 1);  
//     this.setState({items: newItems});  
//   }  
  
//   render() {  
//     const items = this.state.items.map((item, i) => (  
//       <div key={item} onClick={() => this.handleRemove(i)}>  
//         {item}  
//       </div>  
//     ));  
  
//     return (  
//       <div>  
//     <h1>Animation Example</h1>  
//             <button onClick={this.handleAdd}>Insert Item</button>  
//             <TransitionGroup   
//                transitionName="example"  
//            transitionEnterTimeout={800}  
//                transitionLeaveTimeout={600}>  
//                {items}  
//             </TransitionGroup >  
//       </div>  
//     );  
//   }  
// }  
// export default App;  
