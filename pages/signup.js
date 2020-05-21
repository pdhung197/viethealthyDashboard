import Link from 'next/link'

import NonSecureLayout from './../hocs/defaultPage'

import UserForm from './../containers/UserForm/UserForm'

function SignUp() {
    return (
        <>
            <UserForm
                authType="signUp"
            />
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}

export default NonSecureLayout(SignUp);