import React from 'react'

export default function SecureLayout(props) {
    return (
        <div className="container container-secured">
            Secured Layout
            {
                props.children
            }
        </div>
    )
}
