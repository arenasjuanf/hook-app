import React , { useEffect, useState }from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;


    useEffect(() => {
        console.log('name changed')
    },[name]);

    useEffect((...e) => {
        console.log('email changed')
    },[email]);



    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value 
        });
    }


    return (
        <div>
            <h1>useEffect</h1>
            <hr/>

            <div className="row">
                <div className="form-group col-12 col-sm-6 col-md-6 mt-1">
                    <input 
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
                        type="email" 
                        name="email"
                        className="form-control"
                        placeholder="your email"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>

            </div>
            { (name) === 'coords' && <Message />}
        </div>

    )
}
