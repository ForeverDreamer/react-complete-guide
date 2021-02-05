import React, { Component } from 'react';
// import Radium from 'radium';

import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { id: 'dsjkld', name: 'Max', age: 28 },
            { id: 'sdkdfj', name: 'Manu', age: 29 },
            { id: 'ownjge', name: 'Stephanie', age: 26 }
        ],
        otherState: 'Some other value',
        showPersons: true
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => { return p.id === id })
        const person = {...this.state.persons[personIndex]};
        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person

        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        // let classes = ['red', 'bold'].join(' ');  // 'red bold'
        const classes = []
        if (this.state.persons.length <= 2) {
            classes.push('red');  // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');  // classes = ['red', 'bold']
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                {/*不推荐此种方式，有性能问题*/}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}
                >Toggle Persons</button>
                {persons}
                {/*{*/}
                {/*    this.state.showPersons ?*/}
                {/*        <div>*/}
                {/*            <Person name={this.state.persons[0].name} age="28"/>*/}
                {/*            <Person*/}
                {/*                name={this.state.persons[1].name}*/}
                {/*                age="29"*/}
                {/*                /!*推荐bind的方式*!/*/}
                {/*                click={this.switchNameHandler.bind(this, 'Max!')}*/}
                {/*                changed={this.nameChangeHandler}*/}
                {/*            >My Hobbies: Racing</Person>*/}
                {/*            <Person name="Stephanie" age="26" />*/}
                {/*        </div> : null*/}
                {/*}*/}
            </div>
        );
        // 以上jsx代码会被React编译转换为此js代码
        // return React.createElement(
        //     'div',
        //     {className: 'App'},
        //     React.createElement('h1', null, 'Does this work now?')
        // );
    }
}

// export default Radium(App);
export default App;

// const App = () => {
//     const [ personState, setPersonState ] = useState({
//         persons: [
//             { name: 'Max', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stephanie', age: 26 }
//         ]
//     });
//
//     const [ otherState, setOtherState ] = useState('some other value');
//
//     console.log(personState, otherState);
//
//     const switchNameHandler = () => {
//         // Don't do this: this.state.persons[0].name = 'Maximilian'
//         setPersonState({
//             persons: [
//                 { name: 'Maximilian', age: 28 },
//                 { name: 'Manu', age: 29 },
//                 { name: 'Stephanie', age: 27 }
//             ]
//         })
//     }
//
//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>This is really working!</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personState.persons[0].name} age="28"/>
//             <Person name="Manu" age="29">My Hobbies: Racing</Person>
//             <Person name="Stephanie" age="26"/>
//         </div>
//     );
// }
//
// export default App;