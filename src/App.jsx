import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import IndustryPage from './pages/IndustryPage'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries/legal" element={<IndustryPage industryKey="legal" />} />
          <Route path="/industries/manufacturing" element={<IndustryPage industryKey="manufacturing" />} />
          <Route path="/industries/real-estate" element={<IndustryPage industryKey="realEstate" />} />
          <Route path="/industries/content" element={<IndustryPage industryKey="content" />} />
          <Route path="/industries/software" element={<IndustryPage industryKey="software" />} />
          <Route path="/industries/accounting" element={<IndustryPage industryKey="accounting" />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
