import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { withTranslation } from '../../i18n';

import ValidateFuncs from './../../utils/validationFuncs';

const ValidateMessage = (props) => {
    const {
        message = '',
        isShowMessage = false
    } = props || {};

    return <p
        className={`validator__error-message validator__error-message--${isShowMessage ? 'show text-danger' : 'hide'}`}
    >
        {message}
    </p>
}

function Validator(props) {
    const {
        id,
        className = '',
        validateTypes,
        value,
        isShowMessage = false,
        validationCallback,
        t
    } = props || {};

    const validateCheck = () => {
        if (!validateTypes || !validateTypes.length) {
            setTimeout(() => validationCallback(id, true));
            return <ValidateMessage
                message="_"
                isShowMessage={false}
            />;
        }

        let isValid = true;
        for (let validateType of validateTypes) {
            const {
                validKey,
                validRange
            } = validateType || {};

            isValid = ValidateFuncs[validKey] ? ValidateFuncs[validKey](value, validRange) : true;

            if (!isValid) {
                setTimeout(() => validationCallback(id, isValid));

                let message = '';
                switch (validKey) {
                    case 'isRequiredValue':
                        message = t('isRequiredValue', { fieldName: t(id).toLowerCase() });
                        break;
                    default:
                        message = t(`${validKey}Message`);
                        break;
                }
                return <ValidateMessage
                    message={message}
                    isShowMessage={isShowMessage}
                />;
            }
        }

        setTimeout(() => validationCallback(id, isValid));
        return <ValidateMessage
            message="_"
            isShowMessage={false}
        />;
    }

    return (
        <div className={`validator ${className} validator--${isShowMessage ? 'show' : 'hide'}`}>
            {
                validateCheck()
            }
        </div>
    )
}

Validator.propTypes = {
    validateTypes: PropTypes.array,
    value: PropTypes.any.isRequired,
    withValidation: PropTypes.bool,
    validationCallback: PropTypes.func,
    id: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
}

export default withTranslation('message')(Validator);
