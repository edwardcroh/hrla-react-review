import React from 'react';
import Entry from './Entry.jsx';

const List = ({tasks, onInputChange, addTask, doneTask}) => {

    return (
        <div>
            <input type="text" onChange={onInputChange}></input>
            <button onClick={addTask}>Add Task</button>
            <h3>Your Tasks:</h3>
            <ul>
                {tasks.map((task, key) => (
                    <Entry task={task} doneTask={doneTask} key={key} index={key} />
                ))}
            </ul>
        </div>
    )

}

export default List