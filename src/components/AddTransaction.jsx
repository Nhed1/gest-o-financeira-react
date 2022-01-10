import React, {useState} from 'react'

export const AddTransaction = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)

    return (
    <>
    <h3>Add new transaction</h3>
    <form>
        <div className="form-control">
          <label>Text</label>
          <input htmlFor="text"
           type="text" placeholder="Enter text..."
           value={title}
           onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div className="form-control">
          <label>Amount <br/>(negative - expense, positive - income)</label>
          <input htmlFor="amount"
           type="number" placeholder="Enter amount..."
           value={amount}
           onChange={(e) => {setAmount(e.target.value)}} />
        </div>
        <button className="btn"
        onClick={(e) => {
          props.sendData({title, amount})
          e.preventDefault()
        }}>Add transaction</button>
    </form>
    </>
    )
}
