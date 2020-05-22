import Link from 'next/link'

import NonSecureLayout from './../hocs/defaultPage'

import AuthForm from './../containers/AuthForm/AuthForm'

function ChangePass() {
    return (
        <>
            <AuthForm
                authType="changePass"
            />
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}

export default NonSecureLayout(ChangePass);