import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: "a", name: 'Ryan', age: 29},
            { id: "b", name: 'Camern', age: 29},
            { id: "c", name: 'Viola', age: 2},
            { id: "d", name: 'Jimmy', age: '?'}
        ],
        otherPersons: 'some other value', //changing the state will not change or discard other objects in the state
        showPersons: false
    }

    switchNameHandler = () => {
        //console.log('Was clicked!');
        //DONT DO THIS this.state.persons[0].name = 'Bryan';
        this.setState( {
            persons: [
                { name: 'Bryan', age: 29},
                { name: 'Cameron', age: 29}, 
                { name: 'Viola Antionette Baby Sweetheart Gurl', age: 2},
                { name: 'Jimmy Boi', age: '????'}
            ] 
        } )
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();  *older version
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(pers => {
            return pers.id === id;
        });

        const person = {
          ...this.state.persons[personIndex] 
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
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
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}  />
                    })}
                </div> 
            );

            secondaryButtonStyle.backgroundColor = 'green';

        }  
    
        //let classes = ['red', 'large'].join(' '); empty call joins both red and bold into one string
     
        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('large');
        }

        return(
            <div className="App">
                <h1 className={classes.join(' ')}>Hi, I'm a React App</h1>
                <button 
                    // onClick={this.switchNameHandler}
                    onClick={this.switchNameHandler}
                    style={primaryButtonStyle}> Switch Name</button>

                <button 
                    onClick={this.togglePersonsHandler}
                    style={secondaryButtonStyle}> Show Persons</button>

                <h2>--Click on any name to delete--</h2>
                <h2>--Edit the names via the text box--</h2>

                {persons}
                    
            </div>
        );
    }
}

export default App;