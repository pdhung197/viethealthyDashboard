import Link from 'next/link'

import NonSecureLayout from './../hocs/defaultPage'

function Login() {
    return (
        <div>
            Login form
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}

export default NonSecureLayout(Login);