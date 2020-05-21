import NonSecureLayout from './../hocs/defaultPage'

import UserForm from './../containers/UserForm/UserForm';

function Login() {
    return (
        <>
            <UserForm
            />
        </>
    )
}

Login.getInitialProps = async () => ({
    namespacesRequired: ['auth'],
})

export default NonSecureLayout(Login);