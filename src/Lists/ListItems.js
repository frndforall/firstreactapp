import React, {Component} from 'react';
import Person from '../Person/Person';

class ListItems extends Component{
    state ={
        persons: [
            {id: 1,name: 'Vasu', age: 28},
            {id: 2,name: 'Madhav', age: 25}
        ],
        showPersons: false
        
    }

    toggleHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    deletePersonHandler = (index) =>{
        const persons = this.state.persons.slice();
        persons.splice(index,1);
        this.setState({
            persons : persons
        });
    }

    nameChangedHandler = (event,id) =>{

        const personIndex = this.state.persons.findIndex(person => {
            return person.id == id;
        })

        const result = [...this.state.persons];
        const person = result[personIndex];
        this.setState({
           name: event.target.value
        });
     }



    render () {
        let persons = null;

        if ( this.state.showPersons) {
          persons=  <div>
           {this.state.persons.map((person,index) =>{
               return <Person name={person.name} age ={person.age} click={() => this.deletePersonHandler(index)} key = {person.id} changed={(event) => this.nameChangedHandler(event,person.id)}/>
           })}
            </div>
        } 
      return ( 
          <div>
          <button onClick={this.toggleHandler}>Toggle</button>
          {persons}
          </div>
      );
    }

}

export default ListItems;