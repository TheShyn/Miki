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
import LayoutAdmin from './layout/Admin'
import Dasboard from './pages/Admin/Dashboard'
import ProductsMana from './pages/Admin/Products'
import EditProduct from './pages/Admin/Products/Add'
import AddProduct from './pages/Admin/Products/Add'
import UpdateProduct from './pages/Admin/Products/Update'
import CategoriesMana from './pages/Admin/Categories'
import AddCate from './pages/Admin/Categories/Add'
import UpdateCate from './pages/Admin/Categories/Update'
import UserMana from './pages/Admin/User'
import UpdateUser from './pages/Admin/User/Update'
import OrderMana from './pages/Admin/Orders'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient/>}>
          {/* client */}
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<DetailPage />} />
          <Route path='aboutUs/brandandhistory' element={<BrandAndHistory />} />
          <Route path='cart' element={<Cart />} />
          <Route path='payment' element={<Payment />} />
        </Route>
        {/* auth */}
        <Route path='auth'>
          <Route index element={<Login/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgotpassword' element={<ForgotPass/>}/>
        </Route>
        {/* admin */}
        <Route path = 'admin' element={<LayoutAdmin/>}>
          <Route index element={<Dasboard/>} />
          <Route path='products' element={<ProductsMana/>} />
          <Route path='products/add' element={<AddProduct/>} />
          <Route path='products/edit/:id' element={<UpdateProduct/>} />

          <Route path='categories' element={<CategoriesMana/>} />
          <Route path='categories/add' element={<AddCate/>} />
          <Route path='categories/edit/:id' element={<UpdateCate/>} />


          <Route path='users' element={<UserMana/>} />
          <Route path='users/edit/:id' element={<UpdateUser/>} />


          <Route path='orders' element={<OrderMana/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
