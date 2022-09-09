import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <>
        <h3>Counter:</h3>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Minus
        </button>
        <button onClick={onClickPlus} className="plus">
          Plus +
        </button>
      </>
    </div>
  )
}

export default App
