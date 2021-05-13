import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {


    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log("email cambió");
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }


    return (
        <form onSubmit={ handleSubmit } >
            <h1>useEffect</h1>
            <hr/>

            <div className="row">
                <div className="form-group col-12 col-sm-6 col-md-6 mt-1">
                    <input 
                        required
                        type="text" 
                        name="name"
                        className="form-control"
                        placeholder="your name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group col-12 col-sm-6 col-md-6 mt-1">
                    <input 
                        required
                        type="email" 
                        name="email"
                        className="form-control"
                        placeholder="your email"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group col-12 col-sm-6 col-md-6 mt-1">
                    <input 
                        required
                        type="password" 
                        name="password"
                        className="form-control"
                        placeholder="****"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>

                <button className="btn btn-primary btn-sm m-1">
                    Submit                    
                </button>

            </div>
        </form>

    )
}
