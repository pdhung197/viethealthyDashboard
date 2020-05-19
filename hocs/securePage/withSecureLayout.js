import React, { Component } from 'react';

import SecureLayout from '../../containers/Layout/SecureLayout';

export default function withSecureLayout(ComposedComponent) {
    return class WithSecureLayout extends Component {
        render() {
            return (
                <SecureLayout>
                    <ComposedComponent {...this.props} />
                </SecureLayout>
            )
        }
    }
}
