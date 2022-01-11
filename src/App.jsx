import './app.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { useState,useEffect } from 'react'
// import {  } from 'react/cjs/react.development'

function App() {  
  const [dataFromUser, setDataFromUser] = useState({})
  const [allData, setAllData] = useState([])
  const [total, setTotal] = useState(0)

  const getData = (data) => {
    setDataFromUser(() => data)

    setAllData(prevState => [...prevState , data])
  } 

  function handleTotal(){
    if (dataFromUser.amount){
      setTotal( prevCount => prevCount + dataFromUser.amount);
    }
  }

  useEffect(() => {
    handleTotal()
  }, [dataFromUser])

  return (
    <div>
      <Header/>
      <div className="container">
        <Balance
        total={total}/>
        <IncomeExpenses
        data={dataFromUser}/>
        <AddTransaction
        sendData={getData}/>
        <TransactionList
        data={allData}/>
        
      </div>
    </div>
  );
}

export default App;
