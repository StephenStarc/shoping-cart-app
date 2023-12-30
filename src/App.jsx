import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import { NavBar } from './Components/Navbar'
import {Shop} from './page/shop/Shop'
import { Cart } from './page/cart/Cart'
import { ShopContextProvider } from './context/shop-context'

function App() {
  const [count, setCount] = useState(0)
  return (
    <ShopContextProvider>
     <div className='App'>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
     </div>
    </ShopContextProvider>
  )
}

export default App
