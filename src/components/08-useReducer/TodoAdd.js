import React from 'react';
import {useForm } from '../../hooks/useForm'


export const TodoAdd = ({ handleAddTodo }) => {

        
    const [{description}, handleInputChanges, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!description || !description.trim()){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }


    return (
        <>
            <h4 className="text-center add-title">
                Add TODO
            </h4>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control w-100"
                    type="text"
                    name="description"
                    placeholder="Example: Do homeworks"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChanges}
                />

                <button type="submit" className="btn btn-outline-primary mt-2 btn-block w-100">
                    Add
                </button>
            </form>  
        </>
    )
}
