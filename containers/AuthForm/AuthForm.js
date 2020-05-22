import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Link from 'next/link';
import PropTypes from 'prop-types'

import { withTranslation } from '../../i18n';

const authTypes = [
    'login',
    'signUp',
    'changePass',
    'resetPass'
];

const LoginForm = dynamic(() => import('./LoginForm'))
const SignUpForm = dynamic(() => import('./SignUpForm'))
const ChangePassForm = dynamic(() => import('./ChangePassForm'))
const ResetPassForm = dynamic(() => import('./ResetPassForm'))

function AuthForm(props) {
    const {
        authType = 'login',
        t
    } = props || {};

    const [authTypeState, changeAuthType] = useState(authType);

    const switchAuthType = (e, authType) => {
        /* e.preventDefault(); */
        changeAuthType(authType);
    };

    const loadAuthForm = (authType) => {
        switch (authType) {
            case authTypes[0]:
                return <LoginForm />;
            case authTypes[1]:
                return <SignUpForm />;
            case authTypes[2]:
                return <ChangePassForm />;
            case authTypes[3]:
                return <ResetPassForm />;
            default:
                return null;
        }
    }

    return (
        <>
            <Head>
                <title>{t(`${authType}Type`)}</title>
            </Head>
            <div className={`auth-form ${authTypeState + '-form'}`}>
                <div className="auth-form__back">
                    <div>
                        {
                            authTypes.map(at => <Link
                                key={at}
                                href={`/auth?type=${at}`}
                                as={`/${at}`}
                            >
                                <a
                                    onClick={(e) => switchAuthType(e, at)}
                                >
                                    {t(`${at}Type`)}
                                </a>
                            </Link>)
                        }
                        <Link href="/"><a>Home</a></Link>
                    </div>
                </div>
                <div className="auth-form__form">
                    {
                        loadAuthForm(authType)
                    }
                </div>
            </div>
        </>
    )
}

AuthForm.propTypes = {
    t: PropTypes.func.isRequired
}

export default withTranslation('auth')(AuthForm);