import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Ryan', age: 29},
            {name: 'Camern', age: 29},
            {name: 'Viola', age: 2},
            {name: 'Jimmy', age: '?'}
        ],
        otherPersons: 'some other value', //changing the state will not change or discard other objects in the state
        showPersons: false
    }

    switchNameHandler = () => {
        //console.log('Was clicked!');
        //DONT DO THIS this.state.persons[0].name = 'Bryan';
        this.setState( {
            persons: [
                {name: 'Bryan', age: 29},
                {name: 'Cameron', age: 29} 
            ] 
        } )
    }

    nameChangeHandler = (event) => {
        this.setState( {
            persons: [
                {name: event.target.value, age: 29},
                {name: 'Cameron', age: 29} 
            ] 
        } )
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


    render () {
        const primaryButtonStyle = {
            backgroundColor: 'blue',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            color: 'white',
            cursor: 'pointer'
        };

        const secondaryButtonStyle = {
            backgroundColor: 'red',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            color: 'white',
            cursor: 'pointer'
        };
    
    
    // only works in classes
     
        return(
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button 
                    // onClick={this.switchNameHandler}
                    onClick={this.switchNameHandler}
                    style={primaryButtonStyle}> Switch Name</button>

                <button 
                    onClick={this.togglePersonsHandler}
                    style={secondaryButtonStyle}> Show Persons</button>

                { 
                    this.state.showPersons === true ? 
                        <div>
                            <Person 
                                name={this.state.persons[0].name} 
                                age={this.state.persons[0].age}
                                click={this.switchNameHandler}
                                changed={this.nameChangeHandler}>  My hobbies include: Playing Video Games, Cuddling, and Cooking </Person> 
                            <Person 
                                name={this.state.persons[1].name} 
                                age={this.state.persons[1].age} >  My hobbies include: Coding, Playing Guitar, and Sleeping </Person>  
                            <Person name="Viola" age="2" >  My hobbies include: Hoofing, Cuddling, and Playing </Person>
                            <Person name="Jimmy" age="?" > My hobbies include: Snarling, Cuddling, and Sleeping</Person> 
                        </div> : null
                }
            </div>
    );
    }
}

export default App;