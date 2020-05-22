import Link from 'next/link'

import NonSecureLayout from './../hocs/defaultPage'

import AuthForm from './../containers/AuthForm/AuthForm'

function ResetPass() {
    return (
        <>
            <AuthForm
                authType="resetPass"
            />
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}

export default NonSecureLayout(ResetPass);