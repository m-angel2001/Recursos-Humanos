import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListadoEmpleados from './empleados/ListadoEmpleados'
import Navegacion from './plantilla/Navegacion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navegacion/>
    <ListadoEmpleados/>
    </>
  )
}

export default App
