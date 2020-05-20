import React from 'react'

export default function SecureLayout(props) {
    return (
        <>
            Secured Layout
            {
                props.children
            }
        </>
    )
}
