import Link from 'next/link'

import NonSecureLayout from './../hocs/defaultPage'

import UserForm from './../containers/UserForm/UserForm'

function ChangePass() {
    return (
        <>
            <UserForm
                authType="changePass"
            />
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}

export default NonSecureLayout(ChangePass);