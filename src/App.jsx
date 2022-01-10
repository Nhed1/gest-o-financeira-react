import './app.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import React, {useState} from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)


  const titleAmount = (titleChild, amountChild) => {
    setTitle(titleChild)
    setAmount(amountChild)
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction
        titleAmout={titleAmount}/>
      </div>
    </div>
  );
}

export default App;
