import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>

}

const ToDoList = (props: ToDoListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {/*//props.title[0*/}
                <li><input type="checkbox" checked={true}/> <span>{props.tasks[0].isDone}</span>{props.tasks[0].isDone}</li>
                <li><input type="checkbox" checked={true}/> <span>{props.tasks[1].isDone}</span>{props.tasks[1].isDone}</li>
                <li><input type="checkbox" checked={false}/> <span>{props.tasks[2].isDone}</span>{props.tasks[2].isDone}</li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

</div>
    );
};

export default ToDoList;