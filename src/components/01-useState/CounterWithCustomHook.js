import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './CounterApp.css'

export const CounterWithCustomHook = () => {

    const {state: counter, increment, decrement, reset } = useCounter(15);

    return (
        <>
            <h1 className="text-center">Counter with custom-hook: { counter }</h1>   
            <hr />

            <div className="d-flex justify-content-around">
                
                <button className="btn btn-lg btn-secondary" onClick={ () => decrement() }>
                    -1
                </button>
                
                <button className="btn btn-lg btn-secondary" onClick={ () => reset() }>
                    RESET
                </button>

                <button className="btn btn-lg btn-primary" onClick={ () => increment() }>
                    +1
                </button>


            </div>
        </>
    )
}
