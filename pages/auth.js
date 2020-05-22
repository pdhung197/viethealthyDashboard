import { useRouter } from 'next/router'

import NonSecureLayout from './../hocs/defaultPage'

import AuthForm from '../containers/AuthForm/AuthForm';

function Auth() {
    const router = useRouter();
    const { query = {} } = router || {};
    const { type = 'login' } = query || {};
    return (
        <>
            <AuthForm
                authType={type}
            />
        </>
    )
}

Auth.getInitialProps = async () => ({
    namespacesRequired: ['auth']
})

export default NonSecureLayout(Auth)