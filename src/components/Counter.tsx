import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>O valor do contador está em: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
    </div>
  )
}

export default Counter
