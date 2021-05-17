import React from 'react';
import propTypes from 'prop-types';

export const Small = React.memo(({value}) => {
    
    return (
        <small>
            { value }
        </small>
    )
});

Small.propTypes = {
    value: propTypes.number.isRequired
};


