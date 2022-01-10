import React from 'react'

export const TransactionList = (props) => {
    console.log(props.data)
    return (
        <>
    <h3>History</h3>
    <ul className="list">
    {props.data.map(eachData => {
        if (eachData.amount >= 0){
            return <li className='plus' key={eachData.key}>{eachData.title} <span>{`R$${eachData.amount}`}</span></li>
        } else {
            return <li className='minus' key={eachData.key}>{eachData.title} <span>{`-R$${eachData.amount*-1}`}</span></li>
        }
    })}
        <li className="minus">
            Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>  
    </ul>
        </>
    )
}
