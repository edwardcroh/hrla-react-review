import React, { Component } from 'react';
import List from './List.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: ['Laundry', 'Clean Room', 'Play Video Games'],
            input: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
    }

    onInputChange(e) {
        this.setState({
            input: e.target.value,
        })
    }

    addTask() {
        this.setState({
            tasks: [...this.state.tasks, this.state.input]
        })
    }

    doneTask(i) {
        let copy = this.state.tasks.slice();
        copy.splice(i, 1);
        this.setState({
            tasks: copy
        })
    }

    render() {
        return (
            <div>Hello from App Component!
                <List 
                    tasks={this.state.tasks} 
                    onInputChange={this.onInputChange} 
                    addTask={this.addTask} 
                    doneTask={this.doneTask} 
                />
            </div>
        )
    }
}

export default App