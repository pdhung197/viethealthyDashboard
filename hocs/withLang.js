import React, { Component } from 'react';
import { i18n } from '../i18n'

export default function withLang(ComposedComponent) {
    return class WithLang extends Component {
        static async getInitialProps(ctx) {
            const pageProps = ComposedComponent.getInitialProps ? ComposedComponent.getInitialProps(ctx) : {};
            const { language } = i18n;

            if (!language || !language.length) i18n.changeLanguage('vi');

            return {
                pageProps,
                namespacesRequired: []
            }
        }
        render() {
            return (
                <>
                    With Language
                    <ComposedComponent {...this.props} />
                </>
            )
        }
    }
}
