import React from 'react';
import './Person.css';
import styled from 'styled-components';


const StyledDiv = styled.div`
    width: 30%;
    margin: 30px auto;
    border: 1px solid #1e1e1e;
    box-shadow: 1px 3px 4px #0a0a0a;
    padding: 20px;
    text-align: center;
    background-color:#ececec;

    @media (min-width: 500px) {
        width: 450px;
    } 
`;

const person = (props) => {
    console.log('[Person.js] rendering...');
  
    return (
        <StyledDiv>
            <p onClick={props.click}> Hi! I'm <strong>{props.name}</strong> and I am <strong>{props.age}</strong> years old </p> 
            <p> {props.children} </p>
            <p>**Edit the name in the text box below **</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )

 };

export default person;