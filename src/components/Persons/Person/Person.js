import React, {Component} from 'react';
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

class Person extends Component {
    render(){
            
        console.log('[Person.js] rendering...');
        return (
            <StyledDiv>
                <p onClick={this.props.click}> Hi! I'm <strong>{this.props.name}</strong> and I am <strong>{this.props.age}</strong> years old </p> 
                <p> {this.props.children} </p>
                <p>**Edit the name in the text box below **</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </StyledDiv>
    )

 };
}
export default Person;