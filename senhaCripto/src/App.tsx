import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Lista } from './pages/Lista'
import { Login } from './pages/Login'

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/lista" element={<Lista />} />

          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
