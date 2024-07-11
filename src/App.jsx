import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppFunctional from './components/AppFunctional.jsx'
import './styles/reset.css'
import './styles/styles.css'

function App() {

  return (
    <>
  <BrowserRouter>
    <h1>GRIDe hoşgeldiniz</h1>
    <Routes>
      <Route path="/" element={<AppFunctional className="functional" />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

