import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
// import { useState } from 'react'

export const IncomeExpenses = ({data}) => {
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    console.log(data)

    function handleExpense(){
      if (data.amount < 0){
      setExpense(() => {
        return expense + (data.amount*-1)
      })}
    }
    function handleIncome(){
      if (data.amount >= 0){
      setIncome(() => {
        return income + (data.amount)
      })}
    }
    useEffect(() => {
      handleExpense()
      handleIncome()
    }, [data.key])

    return (        
        <div className="inc-exp-container">
            <div>
             <h4>Receita</h4>
             <p className="money plus">{`R$${income}`}</p>
            </div>
        <div>
          <h4>Gastos</h4>
          <p className="money minus">{`-R$${expense}`}</p>
        </div>
      </div>
    )
}
