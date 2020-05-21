import React, { Component } from 'react';

import SecureLayout from '../../containers/Layout/SecureLayout';

export default function withSecureLayout(ComposedComponent) {
    return class WithSecureLayout extends Component {
        static async getInitialProps(ctx) {
            const pageProps = ComposedComponent.getInitialProps ? ComposedComponent.getInitialProps(ctx) : {};

            return {
                pageProps,
                namespacesRequired: ['common', 'second-page', 'footer']
            }
        }

        render() {
            return (
                <SecureLayout>
                    <ComposedComponent {...this.props} />
                </SecureLayout>
            )
        }
    }
}
