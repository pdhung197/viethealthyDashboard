import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import { appWithTranslation } from '../i18n'

import withReduxStore from './../hocs/with-redux-store';

import './../public/style/style.scss';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {
            pageProps,
            namespacesRequired: ['common']
        };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props

        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withReduxStore(appWithTranslation(MyApp));