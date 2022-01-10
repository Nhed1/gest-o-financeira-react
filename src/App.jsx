import './app.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { useState } from 'react'

function App() {  
  const [dataFromUser, setDataFromUser] = useState({})
  const [allData, setAllData] = useState([])

  const getData = (data) => {
    setDataFromUser(() => data)

    setAllData(prevState => [...prevState , data])
    console.log(dataFromUser)
  } 
  
  return (
    <div>

      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList
        data={allData}/>
        <AddTransaction
        sendData={getData}/>
      </div>
    </div>
  );
}

export default App;
