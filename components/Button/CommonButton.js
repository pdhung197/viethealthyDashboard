import React from 'react'
import PropTypes from 'prop-types'

function CommonButton(props) {
    const {
        name,
        label,
        onClick,
        className = ""
    } = props || {};
    return (
        <button
            name={name}
            onClick={onClick}
            className={`common-button ${className}`}
        >
            {label}
        </button>
    )
}

CommonButton.defaultProps = {
    type: 'button'
}

CommonButton.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default CommonButton