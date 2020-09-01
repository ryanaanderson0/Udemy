import React from 'react';
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
    background-color: blue;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    color: white;
    cursor: pointer;
`

const StyledSecondaryButton = styled.button`
    background-color: ${props => props.alt ? 'green' : 'red'};
    font: inherit;
    border: 1px solid red;
    padding: 8px;
    color: white;
    cursor: pointer;
    
    &:hover {
        background-color: pink;
        color: yellow;
    }
`

const cockpit = (props) => {

    let classes = [];
        if (props.persons.length <= 2) {
            classes.push('red');
        }

        if (props.persons.length <= 1) {
            classes.push('large');
        }

    return(
        <div>
            <h1 className={classes.join(' ')}>Hi, I'm a React App</h1>

            <StyledPrimaryButton 
                onClick={props.clicked}
                > Switch Name</StyledPrimaryButton>

            <StyledSecondaryButton
                alt={props.changed} 
                onClick={props.clicked}
                > Show Persons</StyledSecondaryButton>

            <h2>--Click on any name to delete--</h2>
            <h2>--Edit the names via the text box--</h2>
        </div>
    );
};

export default cockpit;