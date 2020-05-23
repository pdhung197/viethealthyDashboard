import React, { useState } from 'react'
import PropTypes from 'prop-types'

function InputFormWithAnimationLabel(props) {
    const [inputType, changeInputType] = useState(null)

    const {
        errorMessage,
        isRequired,
        type,
        ...inputProps
    } = props || {};

    const handleViewPassword = (e) => {
        e.stopPropagation();
        changeInputType(inputType ? null : 'text')
    }

    if (!inputProps.placeholder || !inputProps.placeholder.length) inputProps.placeholder = inputProps.label;

    const onChange = () => { };

    if (props.value !== undefined) {
        inputProps.value = props.value;
        inputProps.onChange = props.onChange ? props.onChange : onChange
    }

    if (type === 'checkbox') {
        inputProps.checked = props.checked || false;
        inputProps.onChange = props.onChange ? props.onChange : onChange
    }

    inputProps.className = `animation-input-form ${inputProps.className ? inputProps.className : ''}`;

    return (
        <div className={inputProps.className}>
            <input
                {...inputProps}
                type={inputType || type}
            />
            <label htmlFor={inputProps.id}>
                {inputProps.label}
                {isRequired && <span className="ml-1">*</span>}
            </label>
            {
                type === 'password' && <button
                    className="animation-input-form__showpass"
                    type="button"
                    onClick={handleViewPassword}
                >
                    <div
                        className="animation-input-form__eye"
                    >
                    </div>
                </button>
            }
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