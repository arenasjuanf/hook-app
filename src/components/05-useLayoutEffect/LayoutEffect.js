import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {
    

    const {state: counter, increment } = useCounter (1);
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];
    const pTagRef = useRef();
    const [boxSize, setBoxSize] = useState();

    useLayoutEffect(() => {
        console.log("sisas");
       const {width, height} = pTagRef.current.getBoundingClientRect();
       setBoxSize({width, height})
    }, [quote])

    useEffect(() => {
        console.log("nonas")
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote d-flex">
                <p 
                    ref={ pTagRef }
                    className="text-start"> { quote } 
                </p>
            </blockquote>
            <pre>
                { "width: "+boxSize?.width+" height: "+boxSize?.height }
            </pre>

            <button 
                className="btn btn-primary btn-outline" 
                onClick={ () => increment() }
            >
                Next quote
            </button>

        </div>
    )
}
