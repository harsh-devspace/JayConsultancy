import '../src/css/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Investments from './pages/Investments'
import Contact from './pages/Contact'
import PrivatePolicy from './pages/PrivacyPolicy'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/investments' element={<Investments />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacypolicy' element={<PrivatePolicy />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
