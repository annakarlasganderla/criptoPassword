import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Cadastro } from './pages/Cadastro'
import { Lista } from './pages/Lista'
import { Login } from './pages/Login'

function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/lista" element={<Lista/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
