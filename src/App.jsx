import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import './scss/global.scss'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
