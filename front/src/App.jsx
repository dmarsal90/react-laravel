import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<button type="button" className={'btn btn-primary'}>Add product</button>
    </div>
  )
}

export default App
