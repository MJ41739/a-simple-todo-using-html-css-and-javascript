import React, { useState } from 'react';
import './reset.min.css';
import './style.css';

function Taskmanagmentmainfile() {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    

    const addTask = () => {
        if (task.trim()) {
            setTodoList([...todoList, task]);
            setTask('');
        }
    };

    const markAsComplete = (index) => {
        const completedTask = todoList.splice(index, 1);
        setTodoList([...todoList]);
        setCompletedList([...completedList, ...completedTask]);
    };
    const markAsInComplete = (index) => {
        const IncompletedTask = completedList.splice(index, 1);
        //console.log("IncompletedTask s",IncompletedTask ,"index  " ,index);
        setCompletedList([...completedList]);
        setTodoList([...todoList, ...IncompletedTask]);
    };
    

    return (
        <>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <title>Todo list app</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
            </head>
            <body>
                <header>
                    <input
                        type="text"
                        placeholder="Enter an activity.."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        id="item"
                    />
                    <button id="add" onClick={addTask}>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 16 16"
                            style={{ enableBackground: 'new 0 0 16 16' }}
                            xmlSpace="preserve"
                        >
                            <g>
                                <path
                                    className="fill"
                                    d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"
                                />
                            </g>
                        </svg>
                    </button>
                </header>

                <div className="container">
                    <h1>To do List</h1>
                    <ul className="todo" id="todo">
                        {todoList.map((task, index) => (
                            <li key={index}>
                                {task}
                                <button onClick={() => markAsComplete(index)}>Complete</button>
                                <button onClick={() => markAsInComplete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <h1>Completed List</h1>
                    <ul className="todo" id="completed">
                        {completedList.map((task, index) => (
                            <li key={index}>
                                {task}
                                <button onClick={() => markAsInComplete(index)}>Delete</button>
                            </li>

                        ))}
                    </ul>
                    
                </div>
            </body>
        </>
    );
}

export default Taskmanagmentmainfile;
