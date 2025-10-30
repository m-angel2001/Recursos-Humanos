import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListadoEmpleados from './empleados/ListadoEmpleados'
import Navegacion from './plantilla/Navegacion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AgregarEmpleado from './empleados/AgregarEmpleado'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navegacion/>
    <Routes>
      <Route path="/" element={<ListadoEmpleados/>}/>
      <Route path='/agregar' elemnet={<AgregarEmpleado/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
