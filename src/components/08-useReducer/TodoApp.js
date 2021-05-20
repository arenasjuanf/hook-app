import React, { useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: "learn react",
    done: false
}];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: "sisas",
            done: false
        };

        const action = {
            type: "add",
            payload: newTodo
        };

        dispatch(action);
    }


    return (
        <div>   
            <h1>Todo App <small> ( {todos.length} ) </small></h1>
            <hr />
            
            <div className="row">
                <div className="col-7 list-container">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map((item, i) => (
                                <li key={item.id} className="list-group-item">
                                    <p className="text-center">
                                        {`${i+1}. ${item.desc}` }
                                    </p>
                                    <button type="button" className="btn btn-danger">
                                        Delete
                                    </button>
            
                                </li>
                            ))
                        }
                    </ul>
                    
                </div>

                <div className="col-5">
                    <h4 className="text-center add-title">
                        Add TODO
                    </h4>
                    <form onSubmit={addTodo}>
                        <input
                            className="form-control w-100"
                            type="text"
                            name="description"
                            placeholder="Example: Do homeworks"
                            autoComplete="off"
                        />

                        <button type="submit" className="btn btn-outline-primary mt-2 btn-block w-100">
                            Add
                        </button>


                    </form>

                </div>
            </div>
            

        </div>
    )
}
