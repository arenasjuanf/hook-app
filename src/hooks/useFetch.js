import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({data:null, loading: true, error: null})
    
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect(() => {

        setState({data:null, loading: true, error: null});

        if( isMounted.current ){

            fetch( url )
            .then( resp => resp.json())
            .then(data => {
            
                setState({
                    loading: false,
                    error: null,
                    data
                })
                
            })

        }
        
    }, [url]);

    return state;
}

useFetch.propTypes = {
    url: PropTypes.string.isRequired
}


