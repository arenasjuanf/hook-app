import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { state:counter, increment } = useCounter(100);
    const [Show, setShow] = useState(true);

    const proccess = ( iterations ) => {
        let i = 0;
        while(i < iterations){
            console.log("sisas");
            i++;
        }

        return `${ iterations} success`;
    }

    const memoProccess = useMemo(() => proccess(counter), [counter])

    return (
        <div>
            <h3>MemoHook: <small>{counter}</small> </h3>
            <hr />

            <p>{memoProccess}</p>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1        
            </button>

            <button
                className="btn btn-outline-primary m-3"
                onClick={ () => setShow(!Show) }
            >
                Show / Hide { Show ? 'true' : 'false'}
            </button>

        </div>
    )
}
