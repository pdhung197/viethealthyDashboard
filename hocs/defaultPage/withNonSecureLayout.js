import React, { Component } from 'react';

import NonSecureLayout from '../../containers/Layout/NonSecureLayout';

export default function withNonSecureLayout(ComposedComponent) {
    return class WithNonSecureLayout extends Component {
        render() {
            return (
                <NonSecureLayout>
                    <ComposedComponent {...this.props} />
                </NonSecureLayout>
            )
        }
    }
}
