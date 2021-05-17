import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';

export const Memorize = () => {
    const { state:counter, increment } = useCounter(10);
    const [Show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize: <Small value={counter}/>  </h1>
            <hr />

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
