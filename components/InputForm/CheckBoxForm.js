import React from 'react'
import PropTypes from 'prop-types'

function CheckBoxForm(props) {
    const {
        errorMessage,
        ...inputProps
    } = props || {};

    const onChange = () => { };

    if (inputProps.checked !== undefined) {
        inputProps.checked = props.checked || false;
        inputProps.onChange = props.onChange ? props.onChange : onChange;
    }

    inputProps.className = `checkbox-form ${inputProps.className ? inputProps.className : ''}`;

    return (
        <div className={inputProps.className}>
            <div className="checkbox-form__group">
                <input
                    {...inputProps}
                />
                <label className="checkbox-form__group--fake-checkbox" htmlFor={inputProps.id}></label>
                <label htmlFor={inputProps.id}>{inputProps.label}</label>
            </div>
            {
                errorMessage
                && errorMessage.length
                && <p className="error-message checkbox-form__error">{errorMessage}</p>
            }
        </div>
    )
}

CheckBoxForm.defaultProps = {
    type: 'checkbox'
}

CheckBoxForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default CheckBoxForm;