import React from 'react';

export default function NonSecureLayout(props) {
    return (
        <main className="non-secure-main">
            {
                props.children
            }
        </main>
    )
}
