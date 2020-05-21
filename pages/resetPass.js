import Link from 'next/link'

import NonSecureLayout from './../hocs/defaultPage'

import UserForm from './../containers/UserForm/UserForm'

function ResetPass() {
    return (
        <>
            <UserForm
                authType="resetPass"
            />
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}

export default NonSecureLayout(ResetPass);