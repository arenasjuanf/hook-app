import React from 'react';
import propTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={i+1}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                    
                ))
            }
        </ul>
    )
}
TodoList.propTypes = {
    todos: propTypes.array.isRequired,
    handleDelete: propTypes.func.isRequired,
    handleToggle: propTypes.func.isRequired
}