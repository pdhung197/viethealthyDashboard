import React from 'react';
import Link from 'next/link';

import { withTranslation } from './../../i18n';

import style from './UserForm.module.scss';

const authTypes = [
    'login',
    'signUp',
    'changePass',
    'resetPass'
]

function UserForm(props) {
    const {
        authType = 'login',
        t
    } = props || {};

    return (
        <div className={`${style['auth-form']} ${style[authType + '-form']}`}>
            Form {t(`${authType}Type`)}
            <br />
            <br />
            <br />
            {
                authTypes.map(at => <Link key={at} href={`/${at}`}>
                    <a>{t(`auth:${at}Type`)}</a>
                </Link>)
            }

        </div>
    )
}

export default withTranslation('auth')(UserForm);