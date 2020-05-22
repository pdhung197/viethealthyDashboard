import React from 'react'
import PropTypes from 'prop-types'

function InputFormWithAnimationLabel(props) {
    const {
        errorMessage,
        isRequired,
        ...inputProps
    } = props || {};

    if (!inputProps.placeholder || !inputProps.placeholder.length) inputProps.placeholder = inputProps.label;

    const onChange = () => { };

    if (props.value !== undefined) {
        inputProps.value = props.value;
        inputProps.onChange = props.onChange ? props.onChange : onChange
    }

    if (inputProps.type === 'checkbox') {
        inputProps.checked = props.checked || false;
        inputProps.onChange = props.onChange ? props.onChange : onChange
    }

    inputProps.className = `animation-input-form ${inputProps.className ? inputProps.className : ''}`;

    return (
        <div className={inputProps.className}>
            <input
                {...inputProps}
            />
            <label htmlFor={inputProps.id}>
                {inputProps.label}
                {isRequired && <span className="ml-1">*</span>}
            </label>
            {
                errorMessage
                && errorMessage.length
                && <p className="error-message animation-input-form__error">{errorMessage}</p>
            }
        </div>
    )
}

InputFormWithAnimationLabel.defaultProps = {
    type: 'text'
}

InputFormWithAnimationLabel.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default InputFormWithAnimationLabel;