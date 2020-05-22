import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { withTranslation } from '../../i18n';

import FormGroup from './../../components/FormGroup/FormGroup';
import InputFormWithAnimationLabel from './../../components/InputForm/InputFormWithAnimationLabel';
import CheckBoxForm from './../../components/InputForm/CheckBoxForm';
import CommonButton from './../../components/Button/CommonButton';

function LoginForm({ t }) {
    const onLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login fire');
    }
    return (
        <form onSubmit={onLoginSubmit} className="login-form__form">
            <h1 className="auth-form__title login-form__title">{t('loginType')}</h1>
            <p className="auth-form__detail login-form__detail">{t('loginTypeDescribe')}</p>
            <FormGroup>
                <InputFormWithAnimationLabel
                    id="userName"
                    label={t('userName')}
                    name="userName"
                    className="login-form__input login-form__username"
                    isRequired={true}
                />
            </FormGroup>
            <FormGroup>
                <InputFormWithAnimationLabel
                    id="password"
                    label={t('password')}
                    type="password"
                    name="password"
                    className="login-form__input login-form__password"
                    isRequired={true}
                />
            </FormGroup>
            <div className="login-form__remember-forgot">
                <CheckBoxForm
                    id="rememberMe"
                    label={t('rememberMe')}
                    name="rememberMe"
                    className="login-form__checkbox login-form__rememberMe"
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