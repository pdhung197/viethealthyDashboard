import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { withTranslation } from '../../i18n';
import ValidateFuncs from '../../utils/validationFuncs';

import FormGroup from './../../components/FormGroup/FormGroup';
import InputFormWithAnimationLabel from './../../components/InputForm/InputFormWithAnimationLabel';
import CheckBoxForm from './../../components/InputForm/CheckBoxForm';
import CommonButton from './../../components/Button/CommonButton';
import Validator from './../../components/Validation/Validator';

function LoginForm({ t }) {
    const [valid, setValid] = useState({});

    const [loginData, setStateLoginData] = useState({
        userName: '',
        password: '',
        rememberMe: false
    });

    const [isSubmitted, setSubmitted] = useState(false);

    const setLoginData = (key, value) => {
        const data = {
            ...loginData,
            [key]: value
        };

        setStateLoginData(data);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!ValidateFuncs.isValidObject(valid)) return;

        console.log({ valid, v: ValidateFuncs.isValidObject(valid) });
        console.log('Login fire', loginData);
    }

    const validationCallback = (key, isValid) => {
        if (isValid === valid[key]) return;
        setValid({
            ...valid,
            [key]: isValid
        })
    }

    return (
        <form onSubmit={handleLoginSubmit} className="login-form__form">
            <h1 className="auth-form__title login-form__title">{t('loginType')}</h1>
            <p className="auth-form__detail login-form__detail">{t('loginTypeDescribe')}</p>
            <FormGroup
                isValid={isSubmitted ? valid.userName : true}
            >
                <InputFormWithAnimationLabel
                    id="userName"
                    label={t('userName')}
                    name="userName"
                    className="login-form__input login-form__username"
                    isRequired={true}
                    value={loginData.userName}
                    onChange={(e) => setLoginData('userName', e.target.value)}
                />
                <Validator
                    id="userName"
                    value={loginData.userName}
                    isShowMessage={isSubmitted}
                    validationCallback={validationCallback}
                    validateTypes={[{
                        validKey: 'isRequiredValue'
                    }]}
                />
            </FormGroup>
            <FormGroup
                isValid={isSubmitted ? valid.password : true}
            >
                <InputFormWithAnimationLabel
                    id="password"
                    label={t('password')}
                    type="password"
                    name="password"
                    className="login-form__input login-form__password"
                    isRequired={true}
                    value={loginData.password}
                    onChange={(e) => setLoginData('password', e.target.value)}
                />
                <Validator
                    id="password"
                    value={loginData.password}
                    isShowMessage={isSubmitted}
                    validationCallback={validationCallback}
                    validateTypes={[{
                        validKey: 'isRequiredValue'
                    }]}
                />
            </FormGroup>
            <div className="login-form__remember-forgot">
                <CheckBoxForm
                    id="rememberMe"
                    label={t('rememberMe')}
                    name="rememberMe"
                    className="login-form__checkbox login-form__rememberMe"
                    checked={loginData.checked}
                    onChange={(e) => setLoginData('rememberMe', e.target.checked)}
                />
                <Link href="/auth?type=resetPass" as="/resetPass">
                    <a>{t('forgotPassword')}</a>
                </Link>
            </div>
            <CommonButton
                type="submit"
                className="auth-form__button login-form__submit-login"
                label={t('loginType')}
                name="loginButton"
            />
            <p className="login-form__signup">
                {`${t('dontHaveAccount')} `}
                <Link href="/auth?type=signUp" as="/signUp">
                    <a>{t('signUpType')}</a>
                </Link>
            </p>
        </form>
    )
}

LoginForm.propTypes = {
    t: PropTypes.func.isRequired
}

export default withTranslation('auth')(LoginForm)