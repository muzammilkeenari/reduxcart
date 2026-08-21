
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Productview from './pages/Productview'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='product/:id' element={<Productview/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='wish' element={<Wishlist/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
