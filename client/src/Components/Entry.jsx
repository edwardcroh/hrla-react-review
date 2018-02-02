import React from 'react';

const Entry = ({task, doneTask, index}) => {

    return (
        <div>
            <li>
                {task}
            </li>
            <button onClick={() => {doneTask(index)}}>DONE</button>
        </div>
    )

}

export default Entry