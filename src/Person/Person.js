import React from 'react';

const Person = (props) => {
    return (
            <div>   
                <h1 onClick = {props.click}> I am just a {props.name} </h1>
                <h1> My age is {props.age} </h1>
                <p> This is the paragraph</p>
                <p>{props.children}</p>
            </div>
    
    );

}

export default Person;