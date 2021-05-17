import React from 'react';
import propTypes from 'prop-types';

export const ShowIncrement = React.memo(({increment}) => {

    console.log(":(");


    return (
        <button 
            className="btn btn-primary"
            onClick={ () => increment(5)}
        >
            Increment
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: propTypes.func.isRequired
}
