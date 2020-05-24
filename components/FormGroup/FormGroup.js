import React, { useState } from 'react'
import PropTypes from 'prop-types';

function FormGroup(props) {
    const {
        className = '',
        isValid = true
    } = props || {};

    return (
        <div className={`form-group form-group${isValid ? '__valid' : '__invalid'} ${className}`}>
            {
                props.children
            }
        </div>
    )
}

FormGroup.propTypes = {
    className: PropTypes.string,
    isValid: PropTypes.bool
}

export default FormGroup