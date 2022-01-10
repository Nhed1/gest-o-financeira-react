import React from 'react'

export const Balance = (props) => {
    console.log(props.total)
    return (
        <>
            <h4>Seu Saldo</h4>
            <h1>{`R$${props.total}`}</h1>
        </>
    )
}
