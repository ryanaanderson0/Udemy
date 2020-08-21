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
                {name: 'Cameron', age: 29}, 
                {name: 'Viola Antionette Baby Sweetheart Gurl', age: 2},
                {name: 'Jimmy Boi', age: '????'}
            ] 
        } )
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();  *older version
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
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

        let persons = null;

        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index)=> {
                        return <Person 
                            click={() => this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age} />
                    })}
                </div> 
            );
        }  
    
    
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
                
                {persons}
                    
            </div>
        );
    }
}

export default App;