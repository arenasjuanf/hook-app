import React from 'react';
import propTypes from 'prop-types';

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <li 
            key={todo.id} 
            className="list-group-item"
        >
            <p 
                className={`${todo.done && "complete"}`}
                onClick={ () =>handleToggle(todo.id) }    
            >
                {`${index}. ${todo.desc}` }
            </p>
            <button 
                type="button"
                className="btn btn-danger"
                onClick={ () => handleDelete(todo.id)}
            >
                Delete
            </button>

        </li>
    )
}

TodoListItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number.isRequired,
    handleDelete: propTypes.func.isRequired,
    handleToggle: propTypes.func.isRequired
}
