import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/a-propos" element={<APropos/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
