import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LayoutClient from './layout'
import Products from './pages/Products'
import BrandAndHistory from './pages/AboutUs/BrandAndHistory'
import DetailPage from './pages/DetailPage'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPass from './pages/Auth/ForgotPass'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient/>}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<DetailPage />} />
          <Route path='aboutUs/brandandhistory' element={<BrandAndHistory />} />
          <Route path='cart' element={<Cart />} />
          <Route path='payment' element={<Payment />} />
        </Route>
        <Route path='auth'>
          <Route index element={<Login/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgotpassword' element={<ForgotPass/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
