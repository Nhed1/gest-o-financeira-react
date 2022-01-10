import React from 'react'

export const Balance = (props) => {
    console.log(props.total)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{props.total}</h1>
        </>
    )
}
