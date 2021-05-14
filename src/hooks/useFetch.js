import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const useFetch = (url) => {

    const [state, setState] = useState({data:null, loading: true, error: null})

    useEffect(() => {

        setState({data:null, loading: true, error: null});

        fetch( url )
        .then( resp => resp.json())
        .then(data => {
            //console.log('termina', data)
            setState({
                loading: false,
                error: null,
                data
            })
        })
    }, [url]);

    return state;
}

useFetch.propTypes = {
    url: PropTypes.string.isRequired
}


