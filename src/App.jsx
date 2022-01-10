import './app.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

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
      setTotal( prevCount => prevCount + parseInt(dataFromUser.amount));
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
