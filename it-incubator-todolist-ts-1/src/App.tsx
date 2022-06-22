import React from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";


//CRUD
//GUI & CLI
function App() {
    const  title_1: string = "What we learn?"
    const  title_2: string = "What to buy?"

    const tasks_1: Array<TaskType> = [
        {id:1, title: "HTML", isDone: true},
        {id:2, title: "CSS", isDone: true},
        {id:3, title: "JS/ES6", isDone: false}
    ]

    const tasks_2: Array<TaskType> = [
        {id:1, title: "Tangerine", isDone: true},
        {id:2, title: "Apple", isDone: true},
        {id:3, title: "Orange", isDone: false}
    ]

    return (

        <div className="App" >

            <ToDoList  title={title_1} tasks={tasks_1}/>
            <ToDoList  title={title_2} tasks={tasks_2бо}/>


          </div>

    );
            }

export default App;
