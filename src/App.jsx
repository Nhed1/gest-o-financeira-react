import './app.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { useState } from 'react'

function App() {  
  const [dataFromUser, setDataFromUser] = useState({})

  const getData = (data) => {
    setDataFromUser(data)
  } 
  
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction
        sendData={getData}/>
      </div>
    </div>
  );
}

export default App;
