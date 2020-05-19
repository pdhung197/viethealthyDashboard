import React, { Component } from 'react';

export default function withLang(ComposedComponent) {
    return class WithLang extends Component {
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
