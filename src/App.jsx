import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contacts/Contact'
import Products from './pages/Products/Products'
import ProductPage from './pages/Products/ProductPage'


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
