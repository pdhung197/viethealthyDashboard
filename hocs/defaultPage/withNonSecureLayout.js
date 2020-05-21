import React, { Component } from 'react';

import NonSecureLayout from '../../containers/Layout/NonSecureLayout';

export default function withNonSecureLayout(ComposedComponent) {
    return class WithNonSecureLayout extends Component {
        static async getInitialProps(ctx) {
            const pageProps = ComposedComponent.getInitialProps ? ComposedComponent.getInitialProps(ctx) : {};

            return {
                pageProps,
                namespacesRequired: ['common', 'second-page', 'footer', 'auth']
            }
        }

        render() {
            return (
                <NonSecureLayout>
                    <ComposedComponent {...this.props} />
                </NonSecureLayout>
            )
        }
    }
}
