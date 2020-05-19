import React from 'react'

export default function NonSecureLayout(props) {
    return (
        <div className="container container--non-secure">
            Non Secure Layout
            {
                props.children
            }
        </div>
    )
}
