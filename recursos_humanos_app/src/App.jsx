import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListadoEmpleados from './empleados/ListadoEmpleados'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ListadoEmpleados/>
  )
}

export default App
