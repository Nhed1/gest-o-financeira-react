import React from 'react'

export const TransactionList = (props) => {
    return (
        <>
    <h3>Histórico</h3>
    <ul className="list">
    {props.data.map(eachData => {
        if (eachData.amount >= 0){
            return <li className='plus' key={eachData.key}>{eachData.title} <span>{`R$${eachData.amount}`}</span></li>
        } else {
            return <li className='minus' key={eachData.key}>{eachData.title} <span>{`-R$${eachData.amount*-1}`}</span></li>
        }
    })}
    </ul>
        </>
    )
}
