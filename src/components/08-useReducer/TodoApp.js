import React, { useReducer, useEffect } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    const handleDelete = (id) => {

        const action = {
            type: "delete",
            payload: id
        };

        dispatch(action);
    }

    const handleToggle = (id) => {

        const action = {
            type: "toggle",
            payload: id
        };

        dispatch(action);

    }

    const handleAddTodo = ( newTodo ) => {

        dispatch( {
            type: "add",
            payload: newTodo
        });
    }

    return (
        <div>   
            <h1>Todo App <small> ( {todos.length} ) </small></h1>
            <hr />
            
            <div className="row">
                <div className="col-7 list-container">
                    <TodoList 
                        todos={todos}
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />                    
                </div>

                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
