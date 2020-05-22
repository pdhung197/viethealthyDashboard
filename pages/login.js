import NonSecureLayout from './../hocs/defaultPage'

import AuthForm from '../containers/AuthForm/AuthForm';

function Login() {
    return (
        <>
            <AuthForm
            />
        </>
    )
}

Login.getInitialProps = async () => ({
    namespacesRequired: ['auth'],
})

export default NonSecureLayout(Login);