import React, { useRef } from 'react';
import './focus.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Input</h1>
            <hr />
            <form className="form-group">
                <input 
                    ref={ inputRef }
                    className="form-control"
                    placeholder="Your Name"
                />
                <div className="text-end">
                    <button 
                        type="button"
                        className="btn btn-outline-primary mt-1"
                        onClick={ handleClick }
                    >
                        Focus
                    </button>
                </div>
            </form>
        </div>
    )
}
