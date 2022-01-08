import {Header} from './components/Header.jsx'
import {History} from './components/History.jsx'
import {Form} from './components/Form.jsx'
import { useState } from 'react'
import './app.scss'

function App() {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0) 
  function handleValueSubmit(value){
    setValue(value)
  }
  return (
    <div className="App">
      <Header></Header>
      <History></History>
      <Form></Form>
    </div>
  );
}

export default App;
