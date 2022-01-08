import {Header} from './components/Header.jsx'
import {History} from './components/History.jsx'
import {Form} from './components/Form.jsx'

import './app.scss'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <History></History>
      <Form></Form>
    </div>
  );
}

export default App;
