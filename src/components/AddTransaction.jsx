import React, {useState} from 'react'

export const AddTransaction = (props) => {
    const [title, setTitle] = useState('') 
    const [amount, setAmount] = useState(0)
    const [key, setKey] = useState(0)

    return (
    <>
    <h3>Adicionar nova transação</h3>
    <form>
        <div className="form-control">
          <label>Título</label>
          <input htmlFor="text"
           type="text" required placeholder="Enter text..."
           value={title}
           onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div className="form-control">
          <label>Quantia <br/>(negativo = gasto | positivo = receita)</label>
          <input htmlFor="amount"
           type="number" required placeholder="Enter amount..."
           value={amount}
           onChange={(e) => {setAmount(parseInt(e.target.value))}} />
        </div>
        <button className="btn"
        onClick={(e) => {
          if (title && amount){
          setKey((prevState) => prevState+=1)
          props.sendData({title, amount, key})
          e.preventDefault()}
        }}>Add transaction</button>
    </form>
    </>
    )
}
