import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'Some other value'
    }

    switchNameHandler = (newName) => {
        // Don't do this: this.state.persons[0].name = 'Maximilian'
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        })
    }

    nameChangeHandler = event => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                {/*不推荐此种方式，有性能问题*/}
                <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
                <Person name={this.state.persons[0].name} age="28"/>
                <Person
                    name={this.state.persons[1].name}
                    age="29"
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangeHandler}
                >My Hobbies: Racing</Person>
                {/*推荐bind的方式*/}
                <Person name="Stephanie" age="26" />
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