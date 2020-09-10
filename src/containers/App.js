import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }

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

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
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
        console.log('[App.js] render')
      
        let persons = null;

        if (this.state.showPersons === true) {
            persons = (
                <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                    />
            );

            // StyledSecondaryButton.backgroundColor = 'green';
            // StyledSecondaryButton[':hover'] = {
            //     backgroundColor: 'pink',
            //     color: 'yellow'
            // };
        }  
    
        //let classes = ['red', 'large'].join(' '); empty call joins both red and bold into one string
     
        

        return(
                <div className="App">
                    <Cockpit 
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler} />
                    {persons}
                        
                </div>
        );
    }
}

export default App;