import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid } from '@mui/material'
import Apsara from './components/Apsara'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to react</h1>
     <Apsara/>
     <Navbar/>
     <Routes>
      <Route path='/pro' element={<Apsara/>}/>
     <Route path='/s' element={<Products/>}/>
     </Routes>
        <Products/>
    </>
  )
}

export default App
