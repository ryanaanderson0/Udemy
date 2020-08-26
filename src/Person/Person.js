import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };


    return (
        <div className="Person" style={style}>
           <p onClick={props.click}> Hi! I'm <strong>{props.name}</strong> and I am <strong>{props.age}</strong> years old </p> 
           <p> {props.children} </p>
           <p>**Edit the name in the text box below **</p>
           <input type="text" onChange={props.changed} value={props.name} />
        </div>
        
    )

 };

export default Radium(person);