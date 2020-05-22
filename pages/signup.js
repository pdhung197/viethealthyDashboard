import Link from 'next/link'

import NonSecureLayout from './../hocs/defaultPage'

import AuthForm from './../containers/AuthForm/AuthForm'

function SignUp() {
    return (
        <>
            <AuthForm
                authType="signUp"
            />
        </>
    )
}

export default NonSecureLayout(SignUp);